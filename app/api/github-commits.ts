// pages/api/github-commits.ts

import type { NextApiRequest, NextApiResponse } from 'next';

const username = "reneafranco"; // Reemplaza con tu nombre de usuario de GitHub
const commitsUrl = `https://api.github.com/search/commits?q=author:${username}`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log("Fetching commits from GitHub...");
    const commitsResponse = await fetch(commitsUrl, {
      headers: { Accept: "application/vnd.github.cloak-preview" },
    });

    if (!commitsResponse.ok) {
      console.error("Failed to fetch from GitHub:", commitsResponse.statusText);
      throw new Error("Error fetching commits from GitHub");
    }

    const commitsData = await commitsResponse.json();
    const codeCommits = commitsData.total_count;

    console.log("Fetched commits data:", commitsData);

    res.status(200).json({ codeCommits });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}

