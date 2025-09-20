import { getApplications } from "../../lib/applications";

const ApplicationsPage = async () => {
  const applications = await getApplications();

  return (
    <div className="max-w-5xl mx-auto p-6 mt-10 bg-white shadow-lg rounded-xl">
      <h1 className="text-3xl font-extrabold mb-8 text-gray-800">
        Submitted Applications
      </h1>

      {applications.length === 0 ? (
        <p className="text-gray-500 text-lg">No applications submitted yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Program</th>
                <th className="border border-gray-300 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app: any, index: number) => (
                <tr key={app.id} className="hover:bg-gray-50 transition">
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {app.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {app.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {app.program}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(app.createdAt).toLocaleDateString()}
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
