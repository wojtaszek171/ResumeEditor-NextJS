import { getCookie } from "../helpers";
import { CVItem, CVUser, EducationItem, EmploymentItem, LanguageItem, SkillItem } from "./types";

const HOST_URL = 'https://pwojtaszko.ddns.net/';

const getAuthHeader = () => {
    // const token = getCookie('token')

    // return (token?.length
    //     ? {'Authorization': `Bearer ${token}` }
    //     : {})
    return {};
}

const requestStatus = async (response: Response) => {
    if (response.ok) {
        return response.json();
    } else {
        const errorRes = await response.json();
        if (errorRes.code) {
            throw errorRes;
        }
        throw new Error(response.statusText);
    }
}

const authenticateUser = (username: string, password: string) => {
    return fetch(`${HOST_URL}/api/users/authenticate`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                password
            }),
        })
        .then(requestStatus)
        .catch(e => {
            throw e;
        });
}

const fetchCurrentUser = () =>
    fetch(`${HOST_URL}/api/users/current`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVs = (): Promise<CVItem[]> =>
    fetch(`${HOST_URL}/api/cv`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVById = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createNotPublishedCV = () =>
    fetch(`${HOST_URL}/api/cv/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify({
            isPublished: false
        }),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const removeCVById = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVSkills = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/skills`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createSkillItem = (id: string, skillBody: SkillItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/skills/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(skillBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const deleteSkillItem = (cvId: string, skillId: string) =>
    fetch(`${HOST_URL}/api/cv/${cvId}/skills/${skillId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateSkillItem = (id: string, skillId: string, skillBody: Partial<SkillItem>) =>
    fetch(`${HOST_URL}/api/cv/${id}/skills/${skillId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(skillBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVEducation = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/education`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createEducationItem = (id: string, educationBody: EducationItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/education/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(educationBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const deleteEducationItem = (cvId: string, eduId: string) =>
    fetch(`${HOST_URL}/api/cv/${cvId}/education/${eduId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateEducationItem = (id: string, eduId: string, educationBody: Partial<EducationItem>) =>
    fetch(`${HOST_URL}/api/cv/${id}/education/${eduId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(educationBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVEmployment = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/employment`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createEmploymentItem = (id: string, employmentBody: EmploymentItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/employment/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(employmentBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const deleteEmploymentItem = (cvId: string, empId: string) =>
    fetch(`${HOST_URL}/api/cv/${cvId}/employment/${empId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateEmploymentItem = (id: string, eduId: string, employmentBody: Partial<EmploymentItem>) =>
    fetch(`${HOST_URL}/api/cv/${id}/employment/${eduId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(employmentBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVLanguages = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/languages`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const createLanguageItem = (id: string, languageBody: LanguageItem) =>
    fetch(`${HOST_URL}/api/cv/${id}/languages/set`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(languageBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const deleteLanguageItem = (cvId: string, langId: string) =>
    fetch(`${HOST_URL}/api/cv/${cvId}/languages/${langId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateLanguageItem = (id: string, eduId: string, languageBody: Partial<LanguageItem>) =>
    fetch(`${HOST_URL}/api/cv/${id}/languages/${eduId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(languageBody),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const fetchCVUser = (id: string) =>
    fetch(`${HOST_URL}/api/cv/${id}/user`, {
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        }
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

const updateCVUser = (id: string, body: Partial<CVUser>) =>
    fetch(`${HOST_URL}/api/cv/${id}/user`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            ...getAuthHeader()
        },
        body: JSON.stringify(body),
    })
    .then(requestStatus)
    .catch(e => {
        throw e;
    });

export const restService = {
    authenticateUser,
    fetchCurrentUser,
    fetchCVs,
    fetchCVById,
    createNotPublishedCV,
    removeCVById,
    fetchCVSkills,
    createSkillItem,
    deleteSkillItem,
    updateSkillItem,
    fetchCVEducation,
    createEducationItem,
    deleteEducationItem,
    updateEducationItem,
    fetchCVEmployment,
    createEmploymentItem,
    deleteEmploymentItem,
    updateEmploymentItem,
    fetchCVLanguages,
    createLanguageItem,
    deleteLanguageItem,
    updateLanguageItem,
    fetchCVUser,
    updateCVUser
};

export default restService;
