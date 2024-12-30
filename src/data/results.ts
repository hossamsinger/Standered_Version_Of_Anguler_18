export interface Results {
    id: number;
    examTitle: string;
    examId: string;
    employeeId: number;
    employeeName: string;
    startTime:string;
    endTime:string;
    totalScore: number;
    status:string,
  }
  export const results: Results[] =[
    {
      "id": 1,
      "examTitle": "Exam A",
      "examId": "EX-001",
      "employeeId": 101,
      "employeeName": "John Doe",
      "startTime": "09:00:00",
      "endTime": "10:00:00",
      "totalScore": 85.50,
      "status": "Pass"
    },
    {
      "id": 2,
      "examTitle": "Exam B",
      "examId": "EX-002",
      "employeeId": 102,
      "employeeName": "Jane Smith",
      "startTime": "10:15:00",
      "endTime": "11:15:00",
      "totalScore": 72.00,
      "status": "Pass"
    },
    {
      "id": 3,
      "examTitle": "Exam C",
      "examId": "EX-003",
      "employeeId": 103,
      "employeeName": "Sam Wilson",
      "startTime": "11:30:00",
      "endTime": "12:30:00",
      "totalScore": 90.00,
      "status": "Pass"
    },
    {
      "id": 4,
      "examTitle": "Exam D",
      "examId": "EX-004",
      "employeeId": 104,
      "employeeName": "Peter Parker",
      "startTime": "12:45:00",
      "endTime": "13:45:00",
      "totalScore": 65.50,
      "status": "Fail"
    },
    {
      "id": 5,
      "examTitle": "Exam E",
      "examId": "EX-005",
      "employeeId": 105,
      "employeeName": "Tony Stark",
      "startTime": "14:00:00",
      "endTime": "15:00:00",
      "totalScore": 78.00,
      "status": "Pass"
    },
    {
      "id": 6,
      "examTitle": "Exam F",
      "examId": "EX-006",
      "employeeId": 106,
      "employeeName": "Bruce Wayne",
      "startTime": "15:15:00",
      "endTime": "16:15:00",
      "totalScore": 60.00,
      "status": "Fail"
    },
    {
      "id": 7,
      "examTitle": "Exam G",
      "examId": "EX-007",
      "employeeId": 107,
      "employeeName": "Clark Kent",
      "startTime": "16:30:00",
      "endTime": "17:30:00",
      "totalScore": 88.00,
      "status": "Pass"
    },
    {
      "id": 8,
      "examTitle": "Exam H",
      "examId": "EX-008",
      "employeeId": 108,
      "employeeName": "Diana Prince",
      "startTime": "17:45:00",
      "endTime": "18:45:00",
      "totalScore": 95.00,
      "status": "Pass"
    },
    {
      "id": 9,
      "examTitle": "Exam I",
      "examId": "EX-009",
      "employeeId": 109,
      "employeeName": "Barry Allen",
      "startTime": "19:00:00",
      "endTime": "20:00:00",
      "totalScore": 70.50,
      "status": "Pass"
    },
    {
      "id": 10,
      "examTitle": "Exam J",
      "examId": "EX-010",
      "employeeId": 110,
      "employeeName": "Arthur Curry",
      "startTime": "20:15:00",
      "endTime": "21:15:00",
      "totalScore": 55.00,
      "status": "Fail"
    },
    {
      "id": 11,
      "examTitle": "Exam K",
      "examId": "EX-011",
      "employeeId": 111,
      "employeeName": "Steve Rogers",
      "startTime": "21:30:00",
      "endTime": "22:30:00",
      "totalScore": 80.00,
      "status": "Pass"
    },
    {
      "id": 12,
      "examTitle": "Exam L",
      "examId": "EX-012",
      "employeeId": 112,
      "employeeName": "Natasha Romanoff",
      "startTime": "22:45:00",
      "endTime": "23:45:00",
      "totalScore": 62.00,
      "status": "Fail"
    },
    {
      "id": 13,
      "examTitle": "Exam M",
      "examId": "EX-013",
      "employeeId": 113,
      "employeeName": "Wanda Maximoff",
      "startTime": "00:00:00",
      "endTime": "01:00:00",
      "totalScore": 87.50,
      "status": "Pass"
    },
    {
      "id": 14,
      "examTitle": "Exam N",
      "examId": "EX-014",
      "employeeId": 114,
      "employeeName": "Vision",
      "startTime": "01:15:00",
      "endTime": "02:15:00",
      "totalScore": 92.00,
      "status": "Pass"
    },
    {
      "id": 15,
      "examTitle": "Exam O",
      "examId": "EX-015",
      "employeeId": 115,
      "employeeName": "Bruce Banner",
      "startTime": "02:30:00",
      "endTime": "03:30:00",
      "totalScore": 75.00,
      "status": "Pass"
    },
    {
      "id": 16,
      "examTitle": "Exam P",
      "examId": "EX-016",
      "employeeId": 116,
      "employeeName": "Stephen Strange",
      "startTime": "03:45:00",
      "endTime": "04:45:00",
      "totalScore": 68.00,
      "status": "Fail"
    },
    {
      "id": 17,
      "examTitle": "Exam Q",
      "examId": "EX-017",
      "employeeId": 117,
      "employeeName": "Scott Lang",
      "startTime": "05:00:00",
      "endTime": "06:00:00",
      "totalScore": 71.50,
      "status": "Pass"
    },
    {
      "id": 18,
      "examTitle": "Exam R",
      "examId": "EX-018",
      "employeeId": 118,
      "employeeName": "Hope van Dyne",
      "startTime": "06:15:00",
      "endTime": "07:15:00",
      "totalScore": 84.00,
      "status": "Pass"
    },
    {
      "id": 19,
      "examTitle": "Exam S",
      "examId": "EX-019",
      "employeeId": 119,
      "employeeName": "T'Challa",
      "startTime": "07:30:00",
      "endTime": "08:30:00",
      "totalScore": 78.50,
      "status": "Pass"
    },
    {
      "id": 20,
      "examTitle": "Exam T",
      "examId": "EX-020",
      "employeeId": 120,
      "employeeName": "Shuri",
      "startTime": "08:45:00",
      "endTime": "09:45:00",
      "totalScore": 91.00,
      "status": "Pass"
    },
    {
      "id": 21,
      "examTitle": "Exam U",
      "examId": "EX-021",
      "employeeId": 121,
      "employeeName": "Nick Fury",
      "startTime": "10:00:00",
      "endTime": "11:00:00",
      "totalScore": 69.50,
      "status": "Fail"
    },
    {
      "id": 22,
      "examTitle": "Exam V",
      "examId": "EX-022",
      "employeeId": 122,
      "employeeName": "Phil Coulson",
      "startTime": "11:15:00",
      "endTime": "12:15:00",
      "totalScore": 74.00,
      "status": "Pass"
    },
    {
      "id": 23,
      "examTitle": "Exam W",
      "examId": "EX-023",
      "employeeId": 123,
      "employeeName": "Peggy Carter",
      "startTime": "12:30:00",
      "endTime": "13:30:00",
      "totalScore": 88.50,
      "status": "Pass"
    },
    {
      "id": 24,
      "examTitle": "Exam X",
      "examId": "EX-024",
      "employeeId": 124,
      "employeeName": "Bucky Barnes",
      "startTime": "13:45:00",
      "endTime": "14:45:00",
      "totalScore": 67.00,
      "status": "Fail"
    },
    {
      "id": 25,
      "examTitle": "Exam Y",
      "examId": "EX-025",
      "employeeId": 125,
      "employeeName": "Sam Wilson",
      "startTime": "15:00:00",
      "endTime": "16:00:00",
      "totalScore": 77.50,
      "status": "Pass"
    },
    {
      "id": 26,
      "examTitle": "Exam Z",
      "examId": "EX-026",
      "employeeId": 126,
      "employeeName": "Loki",
      "startTime": "16:15:00",
      "endTime": "17:15:00",
      "totalScore": 64.00,
      "status": "Fail"
    },
  ]