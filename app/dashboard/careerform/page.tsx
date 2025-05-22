"use client";

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function CareerForm() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CareerFormContent />
    </Suspense>
  );
}

function CareerFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  
  const [formData, setFormData] = useState<FormData>({
      jobTitle: '',
      jobId: '',
      location: '',
      jobType: 'Full-time',
      experienceLevel: 'Entry Level',
      salaryRange: '',
      applicationDeadline: '',
      jobDescription: '',
      requirements: '',
      benefits: '',
      additionalDocFiles: []
    });
  
  const [files, setFiles] = useState<File[]>([]);
  const [existingFiles, setExistingFiles] = useState<{ path: string; originalName: string }[]>([]);
  const [loading, setLoading] = useState(!!id);
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const fetchCareer = async () => {
        try {
          const response = await fetch(`http://localhost:5000/careers`);
          const data = await response.json();
          
          if (data.additionalDocFiles) {
            setExistingFiles(data.additionalDocFiles);
          }
          
          setFormData({
            jobTitle: data.jobTitle,
            jobId: data.jobId,
            location: data.location,
            jobType: data.jobType,
            experienceLevel: data.experienceLevel,
            salaryRange: data.salaryRange || '',
            applicationDeadline: data.applicationDeadline ? 
              new Date(data.applicationDeadline).toISOString().split('T')[0] : '',
            jobDescription: data.jobDescription,
            requirements: data.requirements,
            benefits: data.benefits || '',
            additionalDocFiles: data.additionalDocFiles || []
          });
          setLoading(false);
        } catch (error) {
          console.error('Error fetching career:', error);
          setError('Failed to load job data');
          setLoading(false);
        }
      };
      
      fetchCareer();
    }
  }, [id]);

interface FormData {
    jobTitle: string;
    jobId: string;
    location: string;
    jobType: string;
    experienceLevel: string;
    salaryRange: string;
    applicationDeadline: string;
    jobDescription: string;
    requirements: string;
    benefits: string;
    additionalDocFiles: any[];
}

interface ChangeEvent {
    target: {
        name: string;
        value: string;
    };
}

const handleChange = (e: ChangeEvent): void => {
    const { name, value } = e.target;
    setFormData((prev: FormData) => ({
        ...prev,
        [name]: value
    }));
};

interface FileChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & EventTarget & { files: FileList };
}

const handleFileChange = (e: FileChangeEvent): void => {
    setFiles(Array.from(e.target.files));
};

const removeFile = (index: number): void => {
    setFiles((prev: File[]) => prev.filter((_, i: number) => i !== index));
};

interface ExistingFile {
    path: string;
    originalName: string;
}

const removeExistingFile = (index: number): void => {
    setExistingFiles((prev: ExistingFile[]) => prev.filter((_, i: number) => i !== index));
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    
    try {
        const formDataToSend = new FormData();
        
        // Append all form fields
        Object.entries(formData).forEach(([key, value]) => {
            if (key !== 'additionalDocFiles') {
                formDataToSend.append(key, value as string);
            }
        });
        
        // Append existing files that haven't been removed
        existingFiles.forEach((file: ExistingFile) => {
            formDataToSend.append('existingFiles', JSON.stringify(file));
        });
        
        // Append new files
        files.forEach((file: File) => {
            formDataToSend.append('additionalDocFiles', file);
        });
        
        const url: string = id ? `http://localhost:5000/careers/${id}` : 'http://localhost:5000/careers';
        const method: 'PUT' | 'POST' = id ? 'PUT' : 'POST';
        
        const response: Response = await fetch(url, {
            method,
            body: formDataToSend
        });
        
        if (response.ok) {
            router.push('/dashboard/careers');
        } else {
            const errorData: { message?: string } = await response.json();
            setError(errorData.message || 'Failed to save job');
        }
    } catch (error: unknown) {
        console.error('Error saving career:', error);
        setError('Failed to save job');
    } finally {
        setLoading(false);
    }
};

  if (loading && id) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#224295]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#224295]">
          {id ? 'Edit Job Posting' : 'Add New Job Posting'}
        </h1>
        <button
          onClick={() => router.push('/dashboard/careers')}
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} className="mr-2" />
          Cancel
        </button>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p>{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Title*</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job ID*</label>
            <input
              type="text"
              name="jobId"
              value={formData.jobId}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location*</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Job Type*</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              required
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
              <option value="Internship">Internship</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level*</label>
            <select
              name="experienceLevel"
              value={formData.experienceLevel}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              required
            >
              <option value="Entry Level">Entry Level</option>
              <option value="Mid Level">Mid Level</option>
              <option value="Senior Level">Senior Level</option>
              <option value="Executive">Executive</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Salary Range</label>
            <input
              type="text"
              name="salaryRange"
              value={formData.salaryRange}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              placeholder="e.g., $50,000 - $70,000"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Application Deadline</label>
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Job Description*</label>
          <textarea
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Requirements*</label>
          <textarea
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Benefits</label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Documents</label>
          
          {existingFiles.length > 0 && (
            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Existing Files:</h3>
              <ul className="space-y-2">
                {existingFiles.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <a 
                      href={file.path} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      {file.originalName}
                    </a>
                    <button
                      type="button"
                      onClick={() => removeExistingFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center">
            <input
              type="file"
              id="additionalDocFiles"
              onChange={handleFileChange}
              multiple
              accept=".pdf,.doc,.docx,.txt"
              className="hidden"
            />
            <label
              htmlFor="additionalDocFiles"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg cursor-pointer transition-colors"
            >
              Choose Files
            </label>
            <span className="ml-2 text-sm text-gray-500">
              {files.length > 0 ? `${files.length} file(s) selected` : 'No files selected'}
            </span>
          </div>
          
          {files.length > 0 && (
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h3>
              <ul className="space-y-2">
                {files.map((file, index) => (
                  <li key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                    <span>{file.name}</span>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className="bg-[#224295] text-white px-6 py-2 rounded-lg hover:bg-[#1a3372] transition-colors disabled:opacity-50"
          >
            {loading ? (
              'Saving...'
            ) : (
              <>
                <FontAwesomeIcon icon={faSave} className="mr-2" />
                {id ? 'Update Job' : 'Save Job'}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}