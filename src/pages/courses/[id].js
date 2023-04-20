import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';
import {getCourseDetailsService } from '../../services'
import { useEffect, useState } from 'react';

export default function Course() {
    const [hasMounted,setHasMounted]=useState(false)
    const [courseData,setCourseData]=useState({})
    useEffect(() => {
      
    },[])
    if (error) {
        return<h1>Error</h1>
    }
    return (<h1>Hi</h1>)
}