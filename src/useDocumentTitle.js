import { useEffect } from 'react';

const useDocumentTitle = (counter) => {
    useEffect(() => {
        document.title = `Counter ${counter}`
    }, [counter])
}

export default useDocumentTitle;