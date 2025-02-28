
"use client";

import useSWR from "swr";

const ramadanMode = async () => {
    // const { data, error } = await useSWR(`https://api.aladhan.com/v1/currentIslamicMonth`);
    // console.log(data)

    // return data.data == 8;
    return true;
}

export default ramadanMode;