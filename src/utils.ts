import { NewDiaryEntry, Visibility, Weather } from "./types";

const parseComment = (commentFromRequest: any): string => {
    
    if ( !isString(commentFromRequest) ) {
        throw new Error( 'Invalid comment from')
    }

    return commentFromRequest;
}

const parseDate = (dateFromRequest: any): string => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error( 'Invalid date from')
    }
    return dateFromRequest;
}

const parseWeather = (weatherFromRequest: any): Weather => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error( 'Invalid weather from')
    }
    return weatherFromRequest;
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
    if (!isString(visibilityFromRequest) ||!isVisibility(visibilityFromRequest)) {
        throw new Error( 'Invalid visibility from')
    }
    return visibilityFromRequest;
}

const isString = (string: string): boolean => {
    return typeof string ==='string' // || string instanceof String; 
}

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
}

const isWeather = (string: any): boolean => {
    return Object.values(Weather).includes(string)
}

const isVisibility = (string: any): boolean => {
    return Object.values(Visibility).includes(string)
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }

    return newEntry;
}

export default toNewDiaryEntry;
