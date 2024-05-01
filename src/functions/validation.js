
export function validation(groupInfo) {

    if(groupInfo.length == 0) return false;

    if (groupInfo[0].min > 1 || groupInfo[groupInfo.length - 1].max < 10) {
    
        return { message: "Entire range of 1- 10 should be covered" }
    }
    if (groupInfo[0].min < 1 || groupInfo[groupInfo.length - 1].max > 10) {

        return { message: "Group can't go outside the range of 1 - 10" }
    }
    let no = 1
    for (var i = 0; i < groupInfo.length; i++) {

        
        if (groupInfo[i].min > no + 1) {
            console.log(groupInfo[i], no+1);
            return { message: "There should be no gaps between consecutive groups" }
        }

        if (i != 0 && groupInfo[i].min <= no) {
            // console.log(groupInfo[i], no+1);
            return { message: "There should be no overlap between consecutive groups" }
        }
        no = groupInfo[i].max;
    }
    
    return false;
    
}