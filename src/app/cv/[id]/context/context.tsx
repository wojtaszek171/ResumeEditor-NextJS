'use client'

import restService from "@/app/api/restService";
import { EducationItem, EmploymentItem, LanguageItem, SkillItem } from "@/app/api/types";
import { PropsWithChildren, createContext, useContext, useEffect, useState } from "react";

const CVContext = createContext({});

interface CVWrapperProps extends PropsWithChildren {
  id: number;
}

export function CVWrapper({ children, id }: CVWrapperProps) {
  const [cvId, setCVId] = useState(id);
  const [lang, setLang] = useState("en-us");
  const [cvDetails, setCvDetails] = useState({});
  const [user, setUser] = useState({});
  const [skills, setSkills] = useState<SkillItem[]>([]);
  const [education, setEducation] = useState<EducationItem[]>([]);
  const [employment, setEmployment] = useState<EmploymentItem[]>([]);
  const [langSkills, setLangSkills] = useState<LanguageItem[]>([]);

  useEffect(() => {
    const fetchCV = async () => {

      try {
        const newCvDetails = await restService.fetchCVById(id.toString());
        const newUser = await restService.fetchCVUser(id.toString());
        const newSkills = await restService.fetchCVSkills(id.toString());
        const newEducation = await restService.fetchCVEducation(id.toString());
        const newEmployment = await restService.fetchCVEmployment(id.toString());
        const newLangSkills = await restService.fetchCVLanguages(id.toString());

        setCvDetails(newCvDetails);
        setUser(newUser);
        setSkills(newSkills);
        setEducation(newEducation);
        setEmployment(newEmployment);
        setLangSkills(newLangSkills);
      } catch {
        throw 'Something went wrong';
      }

    }

    fetchCV();
  }, [id])

  const sharedState = {
    cvId,
    lang,
    cvDetails,
    user,
    skills,
    education,
    employment,
    langSkills,
    setCVId,
    setLang,
    setCvDetails,
    setUser,
    setSkills,
    setEducation,
    setEmployment,
    setLangSkills    
  };

  return (
    <CVContext.Provider value={sharedState}>{children}</CVContext.Provider>
  );
}

export function useCVContext() {
  return useContext(CVContext);
}
