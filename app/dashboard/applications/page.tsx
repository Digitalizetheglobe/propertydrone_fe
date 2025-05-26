"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faSearch, faFilter } from '@fortawesome/free-solid-svg-icons';

export default function ApplicationsDashboard() {
  interface Application {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    jobId: string;
    experienceYears: number;
    status: string;
  }

  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterJobId, setFilterJobId] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  interface Job {
    jobId: string;
    jobTitle: string;
  }

  const [availableJobs, setAvailableJobs] = useState<Job[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch applications
        const appsResponse = await fetch('https://api.propertydronerealty.com/applications');
        const appsData = await appsResponse.json();
        setApplications(appsData);
        
        // Fetch available jobs for filter
        const jobsResponse = await fetch('https://api.propertydronerealty.com/careers');
        const jobsData = await jobsResponse.json();
        setAvailableJobs(jobsData);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

interface DeleteResponse {
    ok: boolean;
}

const handleDelete = async (id: string): Promise<void> => {
    if (confirm('Are you sure you want to delete this application?')) {
        try {
            const response: Response = await fetch(`https://api.propertydronerealty.com/applications/${id}`, {
                method: 'DELETE'
            });
            
            if (response.ok) {
                setApplications(applications.filter((app: Application) => app.id !== id));
            }
        } catch (error: unknown) {
            console.error('Error deleting application:', error);
        }
    }
};

interface UpdateStatusResponse {
    ok: boolean;
}

const updateStatus = async (id: string, newStatus: string): Promise<void> => {
    try {
        const response: Response = await fetch(`https://api.propertydronerealty.com/applications/${id}/status`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status: newStatus })
        });
        
        if (response.ok) {
            setApplications(applications.map((app: Application) => 
                app.id === id ? { ...app, status: newStatus } : app
            ));
        }
    } catch (error: unknown) {
        console.error('Error updating status:', error);
    }
};

  const filteredApplications = applications.filter(app => {
    const matchesSearch = 
      app.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesJob = filterJobId ? app.jobId === filterJobId : true;
    const matchesStatus = filterStatus ? app.status === filterStatus : true;
    
    return matchesSearch && matchesJob && matchesStatus;
  });

  const statusOptions = [
    'submitted', 'under_review', 'shortlisted', 'rejected', 'offered', 'hired'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-[#224295] mb-8">Job Applications</h1>

      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search applicants..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295] appearance-none"
              value={filterJobId}
              onChange={(e) => setFilterJobId(e.target.value)}
            >
              <option value="">All Jobs</option>
              {availableJobs.map(job => (
                <option key={job.jobId} value={job.jobId}>
                  {job.jobTitle} ({job.jobId})
                </option>
              ))}
            </select>
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FontAwesomeIcon icon={faFilter} className="text-gray-400" />
            </div>
            <select
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#224295] appearance-none"
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">All Statuses</option>
              {statusOptions.map(status => (
                <option key={status} value={status}>
                  {status.replace('_', ' ')}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#224295]"></div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applicant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredApplications.map((application) => (
                <tr key={application.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {application.firstName} {application.lastName}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{application.jobId}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{application.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {application.experienceYears} years
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={application.status}
                      onChange={(e) => updateStatus(application.id, e.target.value)}
                      className="text-sm rounded border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#224295]"
                    >
                      {statusOptions.map(status => (
                        <option key={status} value={status}>
                          {status.replace('_', ' ')}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button
                      onClick={() => router.push(`/dashboard/applications/${application.id}`)}
                      className="text-[#224295] hover:text-[#1a3372] mr-4"
                    >
                      <FontAwesomeIcon icon={faEye} />
                    </button>
                    <button
                      onClick={() => handleDelete(application.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}