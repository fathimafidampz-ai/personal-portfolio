"use client";

import React from "react";

interface SkillCardProps {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

export default function SkillCard({ name, icon, proficiency, category }: SkillCardProps) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-2">
      <div className="mb-4 text-5xl group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>

      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
        {name}
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
          <span className="font-semibold text-orange-600 dark:text-orange-400">{proficiency}%</span>
        </div>
        
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-rose-500 dark:from-orange-400 dark:to-rose-400 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${proficiency}%` }}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}