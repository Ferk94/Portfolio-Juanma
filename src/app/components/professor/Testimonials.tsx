"use client";
import { useEffect, useState } from "react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  name: string;
  testimonial: string;
  rowIndex?: number;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [newCard, setNewCard] = useState<Testimonial>({
    name: "",
    testimonial: "",
  });
  const [userTestimonial, setUserTestimonial] = useState<Testimonial | null>(
    null
  );
  const [isEditing, setIsEditing] = useState(false);

  // Carga testimonios y chequea localStorage al iniciar
  useEffect(() => {
    fetch("/api/testimonios")
      .then((res) => res.json())
      .then((data) => {
        const saved = localStorage.getItem("userTestimonial");
        if (saved) {
          const localTestimonial = JSON.parse(saved);
          setUserTestimonial(localTestimonial);

          const withoutUserTestimonial = data.filter(
            (t: Testimonial) => t.rowIndex !== localTestimonial.rowIndex
          );

          // Reemplaza el último con el de localStorage si hay más de 5 testimonios
          const combined =
            withoutUserTestimonial.length >= 6
              ? [...withoutUserTestimonial.slice(0, 5), localTestimonial]
              : [...withoutUserTestimonial, localTestimonial];

          setTestimonials(combined);
        } else {
          setTestimonials(data);
        }
      })
      .catch(console.error);
  }, []);

  const saveTestimonial = async (card: Testimonial) => {
    // const isEdit = isEditing && userTestimonial?.rowIndex !== undefined;
    const method = userTestimonial && userTestimonial.rowIndex ? "PUT" : "POST";
    const url = "/api/testimonios";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...card,
        rowIndex: userTestimonial?.rowIndex,
      }),
    });

    if (res.ok) {
      if (method === "POST") {
        const savedTestimonial = await res.json();
        const withoutUserTestimonial = testimonials.filter(
          (t) => t.rowIndex !== savedTestimonial.rowIndex
        );
        const updatedList =
          withoutUserTestimonial.length >= 6
            ? [savedTestimonial, ...withoutUserTestimonial.slice(0, 5)]
            : [savedTestimonial, ...withoutUserTestimonial];

        setTestimonials(updatedList);
        localStorage.setItem(
          "userTestimonial",
          JSON.stringify(savedTestimonial)
        );
        setUserTestimonial(savedTestimonial);
      } else if (method === "PUT") {
        const updatedCard = { ...card, rowIndex: userTestimonial?.rowIndex };
        setUserTestimonial(updatedCard);
        localStorage.setItem("userTestimonial", JSON.stringify(updatedCard));
        setTestimonials(
          testimonials.map((t) =>
            t.rowIndex === userTestimonial?.rowIndex ? updatedCard : t
          )
        );
      }
      setIsEditing(false);
      setNewCard({ name: "", testimonial: "" });
    }
  };

  const handleAddCard = () => {
    if (!newCard.name.trim() || !newCard.testimonial.trim()) return;
    saveTestimonial(newCard);
  };

  const handleUpdateCard = () => {
    if (!newCard.name.trim() || !newCard.testimonial.trim()) return;
    saveTestimonial(newCard);
  };

  const handleDeleteCard = async () => {
    if (!userTestimonial?.rowIndex) return;

    const res = await fetch("/api/testimonios", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rowIndex: userTestimonial.rowIndex }),
    });

    if (res.ok) {
      localStorage.removeItem("userTestimonial");
      setUserTestimonial(null);
      setTestimonials(
        testimonials.filter((t) => t.rowIndex !== userTestimonial?.rowIndex)
      );
      setNewCard({ name: "", testimonial: "" });
      setIsEditing(false);
    }
  };

  // Mostrar solo las últimas 6 tarjetas
  const lastSixTestimonials =
    isEditing && userTestimonial
      ? testimonials
          .filter((t) => t.rowIndex !== userTestimonial.rowIndex)
          .slice(0, 6)
      : testimonials.slice(0, 6);

  return (
    <section className={styles.testimonials}>
      <h2 className={styles.title}>Testimonios de Alumnos</h2>

      <div className={styles.cards}>
        {lastSixTestimonials.map((t, i) => {
          // Check si este es el testimonio del usuario para mostrar botones
          const isUserTestimonial =
            userTestimonial && t.rowIndex === userTestimonial.rowIndex;

          return (
            <div className={styles.card} key={i}>
              <p className={styles.text}>“{t.testimonial}”</p>
              <p className={styles.author}>— {t.name}</p>

              {/* Solo mostrar botones en la card del userTestimonial y si no está editando */}
              {isUserTestimonial && !isEditing && (
                <div className={styles.buttons}>
                  <button
                    className={styles.editBtn}
                    onClick={() => {
                      setIsEditing(true);
                      setNewCard(userTestimonial);
                    }}
                  >
                    Editar
                  </button>
                  <button
                    className={styles.deleteBtn}
                    onClick={handleDeleteCard}
                  >
                    Borrar
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!userTestimonial && !isEditing && (
        <div className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={newCard.name}
            onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
          />
          <textarea
            name="testimonial"
            placeholder="Escribí tu testimonio"
            value={newCard.testimonial}
            onChange={(e) =>
              setNewCard({ ...newCard, testimonial: e.target.value })
            }
          />
          <button onClick={handleAddCard}>Agregar testimonio</button>
        </div>
      )}

      {/* {userTestimonial && !isEditing && (
        <div className={styles.card}>
          <p className={styles.text}>“{userTestimonial.testimonial}”</p>
          <p className={styles.author}>— {userTestimonial.name}</p>
          <button onClick={() => {
            setIsEditing(true);
            setNewCard(userTestimonial);
          }}>Editar</button>
          <button onClick={handleDeleteCard}>Borrar</button>
        </div>
      )} */}

      {isEditing && (
        <div className={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={newCard.name}
            onChange={(e) => setNewCard({ ...newCard, name: e.target.value })}
          />
          <textarea
            name="testimonial"
            placeholder="Escribí tu testimonio"
            value={newCard.testimonial}
            onChange={(e) =>
              setNewCard({ ...newCard, testimonial: e.target.value })
            }
          />
          <button onClick={handleUpdateCard}>Guardar cambios</button>
          <button
            onClick={() => {
              setIsEditing(false);
              setNewCard({ name: "", testimonial: "" });
            }}
          >
            Cancelar
          </button>
        </div>
      )}
    </section>
  );
}
