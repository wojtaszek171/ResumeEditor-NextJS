import restService from './restService'
import { CVItem } from './types'

export const getAllCVs = async (): Promise<CVItem[]> => {
    const cvs = await restService.fetchCVs()
    return cvs
}