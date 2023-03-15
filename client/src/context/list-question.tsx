import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { Question } from "../@core/domain/entities/question";

export type ListQuestionContextType = {
    questions: Question[];
    addQuestion: (question: Question) => void;
};

const defaultContext: ListQuestionContextType = {
    questions: [],
    addQuestion: () => { },
};

export const ListQuestionContext = createContext(defaultContext);

export const ListQuestionProvider = ({ children }: PropsWithChildren) => {
    const [questions, setQuestions] = useState<Question[] | null>(null);

    const addQuestion = useCallback((question: Question) => {
        setQuestions((questions) => [...questions!, question]);
    }, []);

    return <ListQuestionContext.Provider value={{ questions: questions || [], addQuestion }}>
        {children}
    </ListQuestionContext.Provider>;
};
