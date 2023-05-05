interface getDataType {
    userId: number,
    id: number,
    title: string,
    completed: string
}

const getData = async (): Promise<getDataType> => {
    const json = (await fetch("https://jsonplaceholder.typicode.com/todos/1")).json();
    return json;
};


const showData = async (): Promise<void> => {
    const showApi = await getData();
    console.log(showApi)
}

showData();