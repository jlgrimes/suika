'use client';

import { TopicCard } from "@/components/topic-card";

export default function Home() {
  return (
    <main className="flex flex-col p-24">
      <h1 className="text-3xl font-bold mb-6">Wednesday, Dec 23</h1>
      <div className="flex flex-col gap-4">
        <TopicCard />
      </div>
    </main>
  )
}
