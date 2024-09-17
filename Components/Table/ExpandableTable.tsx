"use client";

import React, { useState } from 'react';
import Table from './ExpandTable';
import { Down, Up, UpDown } from './Icon';

export type Details={
    job_title: string;
    count: number;
};

type Data={
    year: number;
    total_jobs: number;
    avg_salary: number;
    details: Details[];
};

const data: Data[] = [
    {
        year: 2024,
        total_jobs: 6027,
        avg_salary: 150643.25,
        details: [{"job_title":"Data Scientist","count":1136},{"job_title":"Data Engineer","count":1066},{"job_title":"Data Analyst","count":864},{"job_title":"Machine Learning Engineer","count":607},{"job_title":"Data Science","count":233},{"job_title":"Research Scientist","count":216},{"job_title":"Data Architect","count":184},{"job_title":"Analytics Engineer","count":153},{"job_title":"Applied Scientist","count":135},{"job_title":"Research Engineer","count":134},{"job_title":"Business Intelligence Analyst","count":113},{"job_title":"Business Intelligence","count":98},{"job_title":"Business Intelligence Engineer","count":84},{"job_title":"ML Engineer","count":76},{"job_title":"AI Engineer","count":70},{"job_title":"Data Manager","count":68},{"job_title":"Research Analyst","count":66},{"job_title":"Machine Learning Scientist","count":56},{"job_title":"Data Specialist","count":38},{"job_title":"Business Intelligence Developer","count":36},{"job_title":"BI Developer","count":32},{"job_title":"Data Science Consultant","count":32},{"job_title":"Data Modeler","count":28},{"job_title":"Head of Data","count":26},{"job_title":"Data Science Manager","count":24},{"job_title":"Data Product Manager","count":22},{"job_title":"Data Analytics Manager","count":21},{"job_title":"Data Developer","count":20},{"job_title":"Data Management Analyst","count":18},{"job_title":"Data Analytics Lead","count":17},{"job_title":"AI Architect","count":16},{"job_title":"Data Integration Engineer","count":16},{"job_title":"Business Intelligence Manager","count":14},{"job_title":"Data Operations Analyst","count":14},{"job_title":"Data Science Engineer","count":13},{"job_title":"BI Analyst","count":12},{"job_title":"Data Integration Specialist","count":12},{"job_title":"Prompt Engineer","count":12},{"job_title":"Robotics Engineer","count":12},{"job_title":"Business Intelligence Lead","count":10},{"job_title":"Data Infrastructure Engineer","count":10},{"job_title":"Data Lead","count":10},{"job_title":"MLOps Engineer","count":10},{"job_title":"Cloud Database Engineer","count":8},{"job_title":"Data Operations Specialist","count":8},{"job_title":"ETL Developer","count":8},{"job_title":"Encounter Data Management Professional","count":8},{"job_title":"Robotics Software Engineer","count":8},{"job_title":"Data Analytics Consultant","count":6},{"job_title":"Data Analytics Specialist","count":6},{"job_title":"Data Management Specialist","count":6},{"job_title":"Data Operations Associate","count":6},{"job_title":"Data Science Practitioner","count":6},{"job_title":"Machine Learning Operations Engineer","count":6},{"job_title":"AI Software Engineer","count":5},{"job_title":"AI Scientist","count":4},{"job_title":"Computational Biologist","count":4},{"job_title":"Computer Vision Engineer","count":4},{"job_title":"Data Integration Developer","count":4},{"job_title":"Data Product Owner","count":4},{"job_title":"Data Quality Analyst","count":4},{"job_title":"Data Quality Manager","count":4},{"job_title":"Data Science Analyst","count":4},{"job_title":"Data Science Director","count":4},{"job_title":"Data Strategist","count":4},{"job_title":"Data Visualization Specialist","count":4},{"job_title":"Head of Machine Learning","count":4},{"job_title":"Insight Analyst","count":4},{"job_title":"Machine Learning Researcher","count":4},{"job_title":"AI Research Scientist","count":3},{"job_title":"AI Product Manager","count":2},{"job_title":"AI Research Engineer","count":2},{"job_title":"Admin & Data Analyst","count":2},{"job_title":"BI Data Analyst","count":2},{"job_title":"Bear Robotics","count":2},{"job_title":"Big Data Engineer","count":2},{"job_title":"Business Intelligence Specialist","count":2},{"job_title":"Data Management Consultant","count":2},{"job_title":"Data Operations Manager","count":2},{"job_title":"Data Pipeline Engineer","count":2},{"job_title":"Data Quality Engineer","count":2},{"job_title":"Data Reporting Analyst","count":2},{"job_title":"Data Science Lead","count":2},{"job_title":"Director of Business Intelligence","count":2},{"job_title":"Director of Data Science","count":2},{"job_title":"ML Ops Engineer","count":2},{"job_title":"Machine Learning Developer","count":2},{"job_title":"Machine Learning Infrastructure Engineer","count":2},{"job_title":"AI Developer","count":1},{"job_title":"AI Programmer","count":1},{"job_title":"Applied Data Scientist","count":1},{"job_title":"Applied Research Scientist","count":1},{"job_title":"Big Data Developer","count":1},{"job_title":"CRM Data Analyst","count":1},{"job_title":"Consultant Data Engineer","count":1},{"job_title":"Data Analyst Lead","count":1},{"job_title":"Data Analytics Associate","count":1},{"job_title":"ETL Engineer","count":1},{"job_title":"Lead Data Analyst","count":1},{"job_title":"Lead Data Scientist","count":1},{"job_title":"Lead Machine Learning Engineer","count":1},{"job_title":"Machine Learning Research Engineer","count":1},{"job_title":"Manager Data Management","count":1},{"job_title":"Managing Director Data Science","count":1},{"job_title":"Quantitative Research Analyst","count":1}]
    },
    {
        year: 2023,
        total_jobs: 8519,
        avg_salary: 153732.66,
        details: [{"job_title":"Data Engineer","count":1852},{"job_title":"Data Scientist","count":1711},{"job_title":"Data Analyst","count":1266},{"job_title":"Machine Learning Engineer","count":966},{"job_title":"Research Scientist","count":286},{"job_title":"Applied Scientist","count":280},{"job_title":"Analytics Engineer","count":222},{"job_title":"Data Architect","count":200},{"job_title":"Business Intelligence Engineer","count":164},{"job_title":"Research Engineer","count":164},{"job_title":"Data Manager","count":135},{"job_title":"ML Engineer","count":102},{"job_title":"Business Intelligence Analyst","count":78},{"job_title":"Machine Learning Scientist","count":64},{"job_title":"Data Science Manager","count":61},{"job_title":"Research Analyst","count":57},{"job_title":"BI Developer","count":55},{"job_title":"AI Engineer","count":47},{"job_title":"Data Science","count":38},{"job_title":"Decision Scientist","count":38},{"job_title":"Data Specialist","count":36},{"job_title":"Data Science Consultant","count":35},{"job_title":"Data Analytics Manager","count":31},{"job_title":"Data Modeler","count":28},{"job_title":"Head of Data","count":28},{"job_title":"BI Analyst","count":27},{"job_title":"Machine Learning Infrastructure Engineer","count":26},{"job_title":"Director of Data Science","count":23},{"job_title":"Data Science Lead","count":22},{"job_title":"Computer Vision Engineer","count":21},{"job_title":"Business Intelligence Developer","count":20},{"job_title":"Data Quality Analyst","count":20},{"job_title":"Data Strategist","count":20},{"job_title":"AI Developer","count":17},{"job_title":"Data Lead","count":16},{"job_title":"Data Product Manager","count":14},{"job_title":"Data Science Engineer","count":13},{"job_title":"NLP Engineer","count":13},{"job_title":"AI Architect","count":12},{"job_title":"Data Infrastructure Engineer","count":12},{"job_title":"Machine Learning Researcher","count":12},{"job_title":"Data Integration Specialist","count":11},{"job_title":"MLOps Engineer","count":11},{"job_title":"AI Scientist","count":10},{"job_title":"Data Developer","count":10},{"job_title":"Data Science Practitioner","count":10},{"job_title":"Data Visualization Specialist","count":10},{"job_title":"Deep Learning Engineer","count":10},{"job_title":"ETL Developer","count":10},{"job_title":"Insight Analyst","count":10},{"job_title":"Machine Learning Software Engineer","count":10},{"job_title":"Business Data Analyst","count":9},{"job_title":"Data Operations Engineer","count":8},{"job_title":"Head of Data Science","count":8},{"job_title":"BI Data Analyst","count":6},{"job_title":"Business Intelligence Manager","count":6},{"job_title":"Data Operations Analyst","count":6},{"job_title":"AI Programmer","count":5},{"job_title":"Applied Data Scientist","count":5},{"job_title":"Data Analytics Lead","count":5},{"job_title":"Prompt Engineer","count":5},{"job_title":"AI Research Engineer","count":4},{"job_title":"Business Intelligence Specialist","count":4},{"job_title":"Data Integration Engineer","count":4},{"job_title":"Data Management Analyst","count":4},{"job_title":"Data Management Specialist","count":4},{"job_title":"Data Operations Specialist","count":4},{"job_title":"Data Product Owner","count":4},{"job_title":"Data Science Director","count":4},{"job_title":"Data Strategy Manager","count":4},{"job_title":"Data Visualization Engineer","count":4},{"job_title":"Applied Machine Learning Engineer","count":3},{"job_title":"Applied Machine Learning Scientist","count":3},{"job_title":"Cloud Database Engineer","count":3},{"job_title":"Data DevOps Engineer","count":3},{"job_title":"Data Quality Engineer","count":3},{"job_title":"Machine Learning Operations Engineer","count":3},{"job_title":"Principal Data Scientist","count":3},{"job_title":"Product Data Analyst","count":3},{"job_title":"Software Data Engineer","count":3},{"job_title":"Big Data Engineer","count":2},{"job_title":"Business Intelligence Data Analyst","count":2},{"job_title":"Cloud Data Engineer","count":2},{"job_title":"Compliance Data Analyst","count":2},{"job_title":"Data Analytics Specialist","count":2},{"job_title":"Data Modeller","count":2},{"job_title":"Data Operations Manager","count":2},{"job_title":"Data Quality Manager","count":2},{"job_title":"Data Visualization Analyst","count":2},{"job_title":"ETL Engineer","count":2},{"job_title":"Finance Data Analyst","count":2},{"job_title":"Financial Data Analyst","count":2},{"job_title":"Head of Machine Learning","count":2},{"job_title":"Lead Data Analyst","count":2},{"job_title":"Machine Learning Modeler","count":2},{"job_title":"Machine Learning Research Engineer","count":2},{"job_title":"Machine Learning Specialist","count":2},{"job_title":"Principal Machine Learning Engineer","count":2},{"job_title":"AI Product Manager","count":1},{"job_title":"AWS Data Architect","count":1},{"job_title":"Admin & Data Analyst","count":1},{"job_title":"Analytics Engineering Manager","count":1},{"job_title":"Autonomous Vehicle Technician","count":1},{"job_title":"Azure Data Engineer","count":1},{"job_title":"BI Data Engineer","count":1},{"job_title":"Big Data Architect","count":1},{"job_title":"Computer Vision Software Engineer","count":1},{"job_title":"Consultant Data Engineer","count":1},{"job_title":"Data Analyst Lead","count":1},{"job_title":"Deep Learning Researcher","count":1},{"job_title":"Lead Data Scientist","count":1},{"job_title":"Lead Machine Learning Engineer","count":1},{"job_title":"Machine Learning Manager","count":1},{"job_title":"Marketing Data Scientist","count":1},{"job_title":"Power BI Developer","count":1},{"job_title":"Principal Data Engineer","count":1},{"job_title":"Staff Data Analyst","count":1}]
    },
    {
        year: 2022,
        total_jobs: 1655,
        avg_salary: 134349.50,
        details: [{"job_title":"Data Engineer","count":488},{"job_title":"Data Scientist","count":404},{"job_title":"Data Analyst","count":272},{"job_title":"Machine Learning Engineer","count":108},{"job_title":"Analytics Engineer","count":56},{"job_title":"Data Architect","count":46},{"job_title":"Data Science Manager","count":30},{"job_title":"Applied Scientist","count":18},{"job_title":"ML Engineer","count":15},{"job_title":"Research Scientist","count":15},{"job_title":"Machine Learning Scientist","count":14},{"job_title":"Data Specialist","count":11},{"job_title":"Data Science Consultant","count":10},{"job_title":"ETL Developer","count":10},{"job_title":"Applied Machine Learning Scientist","count":9},{"job_title":"AI Scientist","count":8},{"job_title":"Data Operations Engineer","count":8},{"job_title":"Research Engineer","count":8},{"job_title":"Business Data Analyst","count":7},{"job_title":"Data Analytics Manager","count":7},{"job_title":"Data Manager","count":7},{"job_title":"BI Data Analyst","count":6},{"job_title":"Lead Data Scientist","count":6},{"job_title":"Applied Data Scientist","count":5},{"job_title":"BI Analyst","count":5},{"job_title":"Machine Learning Developer","count":5},{"job_title":"Machine Learning Researcher","count":5},{"job_title":"Machine Learning Software Engineer","count":5},{"job_title":"Data Operations Analyst","count":4},{"job_title":"Head of Data","count":4},{"job_title":"BI Developer","count":3},{"job_title":"Computer Vision Engineer","count":3},{"job_title":"Lead Machine Learning Engineer","count":3},{"job_title":"Machine Learning Infrastructure Engineer","count":3},{"job_title":"Cloud Database Engineer","count":2},{"job_title":"Data Analytics Consultant","count":2},{"job_title":"Data Analytics Engineer","count":2},{"job_title":"Data Scientist Lead","count":2},{"job_title":"Deep Learning Engineer","count":2},{"job_title":"Director of Data Science","count":2},{"job_title":"Financial Data Analyst","count":2},{"job_title":"Head of Data Science","count":2},{"job_title":"MLOps Engineer","count":2},{"job_title":"Machine Learning Manager","count":2},{"job_title":"NLP Engineer","count":2},{"job_title":"Product Data Analyst","count":2},{"job_title":"AI Architect","count":1},{"job_title":"AI Developer","count":1},{"job_title":"AI Engineer","count":1},{"job_title":"AI Programmer","count":1},{"job_title":"AI Research Engineer","count":1},{"job_title":"Admin & Data Analyst","count":1},{"job_title":"Big Data Engineer","count":1},{"job_title":"Business Intelligence Developer","count":1},{"job_title":"Computer Vision Software Engineer","count":1},{"job_title":"Data Analytics Lead","count":1},{"job_title":"Data Management Specialist","count":1},{"job_title":"Data Science Engineer","count":1},{"job_title":"Data Science Lead","count":1},{"job_title":"Data Science Tech Lead","count":1},{"job_title":"Head of Machine Learning","count":1},{"job_title":"Lead Data Engineer","count":1},{"job_title":"Machine Learning Research Engineer","count":1},{"job_title":"Manager Data Management","count":1},{"job_title":"Marketing Data Analyst","count":1},{"job_title":"Principal Data Analyst","count":1},{"job_title":"Principal Data Architect","count":1},{"job_title":"Principal Data Scientist","count":1},{"job_title":"Principal Machine Learning Engineer","count":1}]
    },{
        year: 2021,
        total_jobs: 218,
        avg_salary: 99922.07,
        details: [{"job_title":"Data Scientist","count":40},{"job_title":"Data Engineer","count":37},{"job_title":"Data Analyst","count":20},{"job_title":"Machine Learning Engineer","count":18},{"job_title":"Research Scientist","count":10},{"job_title":"Data Science Manager","count":6},{"job_title":"Data Science Consultant","count":5},{"job_title":"Director of Data Science","count":5},{"job_title":"Principal Data Scientist","count":5},{"job_title":"BI Data Analyst","count":4},{"job_title":"Big Data Engineer","count":4},{"job_title":"ML Engineer","count":4},{"job_title":"AI Scientist","count":3},{"job_title":"Computer Vision Engineer","count":3},{"job_title":"Computer Vision Software Engineer","count":3},{"job_title":"Data Analytics Engineer","count":3},{"job_title":"Data Analytics Manager","count":3},{"job_title":"Data Architect","count":3},{"job_title":"Head of Data","count":3},{"job_title":"Lead Data Engineer","count":3},{"job_title":"Machine Learning Developer","count":3},{"job_title":"Machine Learning Scientist","count":3},{"job_title":"Applied Data Scientist","count":2},{"job_title":"Applied Machine Learning Scientist","count":2},{"job_title":"Business Data Analyst","count":2},{"job_title":"Cloud Data Engineer","count":2},{"job_title":"Data Science Engineer","count":2},{"job_title":"Head of Data Science","count":2},{"job_title":"Lead Data Analyst","count":2},{"job_title":"Principal Data Engineer","count":2},{"job_title":"Autonomous Vehicle Technician","count":1},{"job_title":"Big Data Architect","count":1},{"job_title":"Cloud Data Architect","count":1},{"job_title":"Data Science Lead","count":1},{"job_title":"Data Specialist","count":1},{"job_title":"Finance Data Analyst","count":1},{"job_title":"Lead Data Scientist","count":1},{"job_title":"Machine Learning Infrastructure Engineer","count":1},{"job_title":"Machine Learning Research Engineer","count":1},{"job_title":"Marketing Data Analyst","count":1},{"job_title":"Marketing Data Engineer","count":1},{"job_title":"Principal Data Analyst","count":1},{"job_title":"Staff Data Scientist","count":1},{"job_title":"Staff Machine Learning Engineer","count":1}]
    },{
        year: 2020,
        total_jobs: 75,
        avg_salary: 102250.87,
        details: [{"job_title":"Data Scientist","count":21},{"job_title":"Data Engineer","count":13},{"job_title":"Data Analyst","count":6},{"job_title":"Machine Learning Engineer","count":4},{"job_title":"Big Data Engineer","count":3},{"job_title":"Business Data Analyst","count":3},{"job_title":"Lead Data Engineer","count":2},{"job_title":"Lead Data Scientist","count":2},{"job_title":"Research Scientist","count":2},{"job_title":"Staff Data Analyst","count":2},{"job_title":"AI Scientist","count":1},{"job_title":"Azure Data Engineer","count":1},{"job_title":"BI Data Analyst","count":1},{"job_title":"Computer Vision Engineer","count":1},{"job_title":"Data Science Consultant","count":1},{"job_title":"Data Science Manager","count":1},{"job_title":"Director of Data Science","count":1},{"job_title":"Lead Data Analyst","count":1},{"job_title":"ML Engineer","count":1},{"job_title":"Machine Learning Infrastructure Engineer","count":1},{"job_title":"Machine Learning Manager","count":1},{"job_title":"Machine Learning Scientist","count":1},{"job_title":"Managing Director Data Science","count":1},{"job_title":"Principal Data Scientist","count":1},{"job_title":"Product Data Analyst","count":1},{"job_title":"Sales Data Analyst","count":1},{"job_title":"Staff Data Scientist","count":1}]
    }
];

enum keyToSortTypeType{
  YEAR,
  TOTAL_JOBS,
  AVG_SALARY
};

enum keyToSortTypeSort{
  ASC,
  DESC,
  NONE
}

interface keyToSortType{
  type: keyToSortTypeType;
  sort: keyToSortTypeSort;
};

const ExpandableTable = () => {
  const [keyToSort,setKeyToSort]=useState<keyToSortType>({
    type: keyToSortTypeType.YEAR,
    sort: keyToSortTypeSort.DESC
  });
  const [expandedRows, setExpandedRows]=useState<number[]>([]);
  const toggleRow = (id:number) => {
    if(expandedRows.indexOf(id)===-1){
      setExpandedRows([...expandedRows,id]);
    }else{
      setExpandedRows(expandedRows.filter((row)=>row!==id));
    }
  };
  const changeSortStyle=(type:number,sort:number)=>{
    setKeyToSort({
      type: type,
      sort: (type===keyToSort.type)?sort:keyToSortTypeSort.ASC
    });
  };

  const sortedData=()=>{
    if(keyToSort.sort===keyToSortTypeSort.ASC){
      if(keyToSort.type===keyToSortTypeType.YEAR){
        return data.toSorted((a:Data,b:Data)=>(a.year-b.year));
      }else if(keyToSort.type===keyToSortTypeType.TOTAL_JOBS){
        return data.toSorted((a:Data,b:Data)=>(a.total_jobs-b.total_jobs));
      }else{
        return data.toSorted((a:Data,b:Data)=>(a.avg_salary-b.avg_salary));
      }
    }else if(keyToSort.sort===keyToSortTypeSort.DESC){
      if(keyToSort.type===keyToSortTypeType.YEAR){
        return data.toSorted((a:Data,b:Data)=>(b.year-a.year));
      }else if(keyToSort.type===keyToSortTypeType.TOTAL_JOBS){
        return data.toSorted((a:Data,b:Data)=>(b.total_jobs-a.total_jobs));
      }else{
        return data.toSorted((a:Data,b:Data)=>(b.avg_salary-a.avg_salary));
      }
    }else{
      return data;
    }
  };

  return (
    <div className="flex justify-center items-center">
      <table className="w-1/2 divide-y divide-gray-200" id='main_table'>
        <thead className="bg-gray-50 text-base">
          <tr>
            <th className="px-4 py-3 border-4 border-collapse text-left text-gray-600 font-bold uppercase tracking-wider cursor-pointer" onClick={()=>changeSortStyle(keyToSortTypeType.YEAR,(keyToSort.sort+1)%3)}>
              <span>Year</span>
              {
                (keyToSort.type!==keyToSortTypeType.YEAR || keyToSort.sort===keyToSortTypeSort.NONE)
                && <UpDown/>
              }
              {
                (keyToSort.type===keyToSortTypeType.YEAR)
                && (keyToSort.sort!==keyToSortTypeSort.NONE)
                && ((keyToSort.sort===keyToSortTypeSort.ASC)?<Up/>:<Down/>)
              }
            </th>
            <th className="px-4 py-3 border-4 border-collapse text-left text-gray-600 font-bold uppercase tracking-wider cursor-pointer" onClick={()=>changeSortStyle(keyToSortTypeType.TOTAL_JOBS,(keyToSort.sort+1)%3)}>
              <span>Total Jobs</span>
              {
                (keyToSort.type!==keyToSortTypeType.TOTAL_JOBS || keyToSort.sort===keyToSortTypeSort.NONE)
                && <UpDown/>
              }
              {
                (keyToSort.type===keyToSortTypeType.TOTAL_JOBS)
                && (keyToSort.sort!==keyToSortTypeSort.NONE)
                && ((keyToSort.sort===keyToSortTypeSort.ASC)?<Up/>:<Down/>)
              }
            </th>
            <th className="px-4 py-3 border-4 border-collapse text-left text-gray-600 font-bold uppercase tracking-wider cursor-pointer" onClick={()=>changeSortStyle(keyToSortTypeType.AVG_SALARY,(keyToSort.sort+1)%3)}>
              <span>Average Salary</span>
              {
                (keyToSort.type!==keyToSortTypeType.AVG_SALARY || keyToSort.sort===keyToSortTypeSort.NONE)
                && <UpDown/>
              }
              {
                (keyToSort.type===keyToSortTypeType.AVG_SALARY)
                && (keyToSort.sort!==keyToSortTypeSort.NONE)
                && ((keyToSort.sort===keyToSortTypeSort.ASC)?<Up/>:<Down/>)
              }
            </th>
            <th className="px-4 py-3 text-left text-gray-600 font-bold uppercase tracking-wider"></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {sortedData().map((row,index) => (
            <React.Fragment key={row.year}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">{row.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.total_jobs}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.avg_salary}</td>
                <td className="whitespace-nowrap">
                  <button className="bg-[#593791] px-2 py-1 hover:bg-[#6b3fb4] text-white rounded-md" onClick={()=>toggleRow(index)}>
                    {(expandedRows.indexOf(index)===-1)?"Show Details":"Hide Details"}
                  </button>
                </td>
              </tr>
              {(expandedRows.indexOf(index)!==-1) && <Table data={row.details}/>}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;