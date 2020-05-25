import moment from 'moment';

function bornYearsAgo(date : Date) : number {
    return moment().diff(date, 'years',true);
}

export default bornYearsAgo;