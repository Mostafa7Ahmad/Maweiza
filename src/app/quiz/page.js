"use client"

import { useState } from 'react';
import Landing from "@/components/Layout/Landing";
import QuizApp from '@/components/quiz/QuizApp';
import data from '@/data/questions.json';


export default function QuizPage() {
    const [quizSettings, setQuizSettings] = useState({
        category: null,
        topic: null,
        difficulty: null
    });

    const handleSelect = (type, value) => {
        setQuizSettings(prev => ({ ...prev, [type]: value }));
    };

    const renderSelectionStep = () => {
        if (!quizSettings.category) {
            return (
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-green-700 text-center">اختر القسم</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data?.mainCategories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => handleSelect('category', category)}
                                className="p-6 w-full bg-gray-50 dark:bg-zinc-800 rounded-sm hover:bg-gray-100 hover:dark:bg-zinc-700 transition-colors border-2 border-gray-200 dark:border-zinc-700">
                                <h3 className="mb-3 pb-3 border-b text-lg font-bold dark:border-zinc-700 text-green-800 dark:text-white">
                                    {category.arabicName}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {category.description}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (!quizSettings.topic) {
            return (
                <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-bold text-green-700 text-center">اختر الموضوع</h2>
                        <button
                            onClick={() => handleSelect('category', null)}
                            className="text-green-600 hover:text-green-700">
                            ← العودة
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {quizSettings.category.topics.map((topic, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect('topic', topic)}
                                className="p-6 w-full text-green-800 dark:text-white bg-gray-50 dark:bg-zinc-800 rounded-sm hover:bg-gray-100 hover:dark:bg-zinc-700 transition-colors border-2 border-gray-200 dark:border-zinc-700">
                                <h3 className="text-lg font-semibold">{topic.name}</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    {Object.keys(topic.levelsData).length} مستويات متاحة
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        if (!quizSettings.difficulty) {
            return (
                <div className="space-y-6">
                    <div className="flex items-center justify-between gap-4">
                        <h2 className="text-2xl font-bold text-green-700 text-center">اختر مستوى الصعوبة</h2>
                        <button
                            onClick={() => handleSelect('topic', null)}
                            className="text-green-600 hover:text-green-700">
                            ← العودة
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {Object.keys(quizSettings.topic.levelsData).map((levelKey, index) => (
                            <button
                                key={index}
                                onClick={() => handleSelect('difficulty', levelKey)}
                                className="p-6 bg-gray-50 dark:bg-zinc-800 rounded-sm hover:bg-gray-100 hover:dark:bg-zinc-700 border-2 border-gray-200 dark:border-zinc-700">
                                <h3 className="text-lg font-semibold text-green-800 dark:text-white">
                                    {levelKey == "level1" && "المستوي الاول"}
                                    {levelKey == "level2" && "المستوي الثاني"}
                                    {levelKey == "level3" && "المستوي الثالث"}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    {quizSettings.topic.levelsData[levelKey].length} سؤال
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }


        return <QuizApp quizSettings={quizSettings} />;
    };

    return (
        <>
            <Landing title="أسئلة دينية" />
            <div className="container mx-auto p-4 pb-10">
                <div className="bg-white dark:bg-zinc-950 border dark:border-zinc-700 rounded-sm shadow-sm p-8">
                    {renderSelectionStep()}
                </div>
            </div>
        </>
    );
}