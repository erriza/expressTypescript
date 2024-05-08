import diaries from '../../data/entries';

import { NonSensitiveDiaryEntry, DiaryEntry, NewDiaryEntry } from '../../types';

const getEntries = (): DiaryEntry[] => {
    return diaries;
};

const getNonSensitiveDiaryEntry = ():NonSensitiveDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility
    }));
};

const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};

const addDiary = ( entry: NewDiaryEntry): DiaryEntry => {
    const NewDiaryEntry = {
        id:Math.max(...diaries.map(d => d.id)) + 1,
        ...entry
    };

    diaries.push(NewDiaryEntry);
    return NewDiaryEntry;
};

export default {
    getEntries,
    getNonSensitiveDiaryEntry,
    findById,
    addDiary
};