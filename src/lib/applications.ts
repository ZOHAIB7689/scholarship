import fs from "fs/promises";
import path from "path";

export type Application = {
  id: string;
  name: string;
  email: string;
  program: string;
  createdAt: string;
};

const filePath = path.resolve(process.cwd(), "src/lib/applications.json");

export async function getApplications(): Promise<Application[]> {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function addApplication(app: Application): Promise<void> {
  const apps = await getApplications();
  apps.push(app);
  await fs.writeFile(filePath, JSON.stringify(apps, null, 2));
}
