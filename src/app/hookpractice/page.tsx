"use client";
// import React, { useEffect, useLayoutEffect, useReducer, useState } from "react";

// interface ResultProfile {
//     title: string;
//     body: string;
// }

// interface ResponseForReducer {
//     loading: boolean;
//     data: ResultProfile;
//     error: boolean;
// }

// const reducer = (state : any, action:(type:string, payload:ResponseForReducer)) => {
//     // Function 명

//     switch (action.type){
//         // payload : parameter
//         case "SUCCESS" :
//             return (
//                 loading : action.payload.loading,
//                 data:  action.payload.data,
//                 error: action.payload.error
//             )
//         case "FALURE":
//             return(
//                 loading : action.payload.loading,
//                 data:  action.payload.data,
//                 error: action.payload.error
//             )
//         default:
//             return state

//     }
// }

// const initialState = {
//     loading:true,
//     data:undefined,
//     error:false
// }

// // react component를 반환
// function Hook() {
//     // loading, data, error
//     // const [loading, setLoading] = useState<boolean>(true);
//     // const [data, setData] = useState<ResultProfile>(); // 비어있으면 string or undefined
//     // const [error, setError] = useState<boolean>(false);

//     const [] = useReducer<ResponseForReducer>(
//         { // initial state 작성
//         initialState
//     });

//     // useLayoutEffect는 랜더링 이전에 진행
//     // useEffect는 랜더링 이후에
//     useLayoutEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts/1")
//             .then(async (result: Response) => {
//                 const resultBody: ResultProfile = await result.json();
//                 // setLoading(false); -> 비동기라서 state간 연결성을 가지려고 reducer를 써야한다.
//                 // setData(resultBody);
//                 // setError(false);
//                 dispatch({type:"SUCCESS"});
//             })
//             .catch(() => {
//                 // 네트워크 연결이 끊어질 때만 catch 발생
//                 // setLoading(false);
//                 // setData(undefined);
//                 // setError(true);
//                 dispatch({type:"FAILURE"});
//             });
//     }, []);
//     // dependencie array -> equality check

//     console.log("render");
//     // 지금은 랜더 때 한번 -> loading -> 랜더
//     // 커밋 때 side effect로 useEffect 수행 -> 랜더

//     // 개발 모드는 한번 수행하고 문법적으로 문제 없으면 다시 수행. react strict false하면 없어진다.

//     //let notundefined: string | undefined;
//     //console.log(notundefined!); //  개발자가 코드 해석을 통해서 명시적으로 보장한다.
//     // 코드 짠 개발자만 알 수 있는 부분.... -> 안티패턴!
//     // 선언할 때 undefined 가능성을 열어줬지만,
//     // !를 붙이면 무조건 undefined가 아니라고 확정한다.

//     // ?. : Null Guard
//     // ! : exclamation mark
//     // ?? : Default Value 설정시 앞에 것이 undefined일 경우
//     // && : 앞 조건이 true 일 때 뒤에것을 반환해야할 때

//     return (
//         <React.Fragment>
//             {loading ? (
//                 <p>로딩중!!</p>
//             ) : (
//                 <div>
//                     <div>{data?.title ?? "DEFAULT_TITLE"}</div>
//                     <div>{data?.body ?? "DEFAULT_TITLE"}</div>
//                 </div>
//             )}
//             <p>{error && "ERROR 바라생"}</p>
//         </React.Fragment>
//     );
// }

// export default Hook;
