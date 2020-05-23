import moment from 'moment';

function bornYearsAgo(date : string) : number {
    return moment().diff(date, 'years',true);
}

export default bornYearsAgo;