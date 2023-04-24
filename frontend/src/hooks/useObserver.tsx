import {FC, MutableRefObject, useEffect, useRef} from "react";


export const useObserver = (ref: MutableRefObject<undefined>, canLoad: boolean, isLoading: unknown, callback: { (): void; (): void; }) => {
  const observer = useRef();

  useEffect(() => {
    if(isLoading) return;
    // @ts-ignore
    if(observer.current) observer.current.disconnect();

    var cb = function(entries:any, observer:any) {
      if (entries[0].isIntersecting && canLoad) {
        callback()
      }
    };
    // @ts-ignore
    observer.current = new IntersectionObserver(cb);
    // @ts-ignore
    observer.current.observe(ref.current)
  }, [isLoading])
}
