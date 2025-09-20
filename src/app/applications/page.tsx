import { getApplications } from "../../lib/db"; // yahan correct file use karo

type Application = {
  id: string;
  name: string;
  email: string;
  program: string;
  created_at: string; // database column snake_case me hota hai
};

const ApplicationsPage = async () => {
  const applications: Application[] = (await getApplications()).map((row: any) => ({
    id: row.id,
    name: row.name,
    email: row.email,
    program: row.program,
    created_at: row.created_at,
  })) as Application[];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-10 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800 text-center">
        📋 Submitted Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">
          No applications submitted yet.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">Name</th>
                <th className="px-4 py-3 border-b">Email</th>
                <th className="px-4 py-3 border-b">Program</th>
                <th className="px-4 py-3 border-b">Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr
                  key={app.id}
                  className={`hover:bg-gray-50 transition ${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="px-4 py-2 border-b text-center">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 border-b">{app.name}</td>
                  <td className="px-4 py-2 border-b">{app.email}</td>
                  <td className="px-4 py-2 border-b">{app.program}</td>
                  <td className="px-4 py-2 border-b">
                    {new Date(app.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ApplicationsPage;
