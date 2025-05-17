// "use client";

// import { useState, useEffect } from "react";
// import 'react-calendar/dist/Calendar.css'; // Estilos por defecto
// import styles from './CalendarView.module.css';
// import dynamic from "next/dynamic";

// export default function CalendarView() {
//   const [date, setDate] = useState(new Date());
//    const [mounted, setMounted] = useState(false);
//   const Calendar = dynamic(() => import("react-calendar"), { ssr: false });

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <div className={styles.calendarContainer}>
//       <h2 className={styles.title}>Calendario de Clases</h2>
//       <Calendar onChange={setDate} value={date} />
//       <p className={styles.selectedDate}>
//         Fecha seleccionada: {date.toLocaleDateString()}
//       </p>
//     </div>
//   );
// }

