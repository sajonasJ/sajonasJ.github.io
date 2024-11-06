// app/api/data/route.js
import path from 'path';
import fs from 'fs/promises';
import { NextResponse } from 'next/server';

// Path to your JSON database file
const filePath = path.resolve('./database/db.json');

// Function to read data from the JSON file
async function readData() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn’t exist, return an empty structure
    if (error.code === 'ENOENT') {
      return {
        projects: [],
        experience: [],
        education: [],
        certifications: [],
        contact: {},
        about: {}
      };
    }
    throw error;
  }
}

// Function to write data to the JSON file
async function writeData(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

// Initialize default data structure if file is missing
async function initializeDB() {
  const data = await readData();
  // Check and initialize any missing sections in the structure
  data.projects ||= [];
  data.experience ||= [];
  data.education ||= [];
  data.certifications ||= [];
  data.contact ||= {};
  data.about ||= {};
  
  await writeData(data);
  return data;
}

// GET request to fetch a specific section (e.g., projects)
export async function GET(request) {
    const data = await initializeDB();
    const section = request.nextUrl.searchParams.get("section");
  
    if (!section || !data[section]) {
      return NextResponse.json({ error: "Invalid section" }, { status: 400 });
    }
    
    return NextResponse.json(data[section]);
  }
  

// POST request to add a new item to a specific section
export async function POST(request) {
  const section = request.nextUrl.searchParams.get("section") || "projects";
  const data = await initializeDB();
  const newItem = await request.json();
  
  data[section].push(newItem);
  await writeData(data);
  return NextResponse.json({ message: 'Item added successfully!' }, { status: 201 });
}

// DELETE request to clear a specific section
export async function DELETE(request) {
  const section = request.nextUrl.searchParams.get("section") || "projects";
  const data = await initializeDB();
  data[section] = []; // Clear the specified section
  
  await writeData(data);
  return NextResponse.json({ message: `All items in ${section} deleted!` }, { status: 200 });
}
