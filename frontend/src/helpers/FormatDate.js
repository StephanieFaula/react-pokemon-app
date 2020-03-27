const FormatDate = (date) => {
    const createdDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    return(createdDate);
}

export default FormatDate;