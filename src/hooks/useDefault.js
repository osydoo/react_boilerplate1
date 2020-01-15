import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

 export default function useLoading() {
  const dispatch = useDispatch();
  const { isLoading, isError } = useSelector(state => state.Default);
  const [loadState, setLoadState] = useState({
    open : false,
    text: '로딩 중...'
  }); // 메시지 상태메시지

  useEffect(()=>{
    if(isLoading){
      setLoadState({...loadState, open: true});
    }else if(isError){
      setLoadState({...loadState, open: false});
    }else{
      setLoadState({...loadState, open: false});
    }
  }, [isLoading, isError]);

  return [{loadState}, setLoadState, dispatch];
}
