import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import contenido from "../src/componentes/lecciones";
import "./styles.css";

export const Lecciones = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const leccionId = parseInt(id, 10);

  if (isNaN(leccionId) || leccionId < 1 || leccionId > contenido.length) {
    navigate("/curso", { replace: true });
    return null;
  }

  const leccion = contenido[leccionId - 1];
  const [seccionActiva, setSeccionActiva] = useState('A');

  useEffect(() => {
    const progresoKey = 'progresoLecciones';
    const progreso = JSON.parse(localStorage.getItem(progresoKey)) || {};
    if (!progreso[leccionId]) {
      progreso[leccionId] = 1;
      localStorage.setItem(progresoKey, JSON.stringify(progreso));
    }
  }, [leccionId]);

  const secciones = [
    { 
      key: 'A', 
      titulo: leccion.tituloA, 
      definicion: leccion.definicionA, 
      imagen: leccion.imagenA 
    },
    { 
      key: 'B', 
      titulo: leccion.tituloB, 
      definicion: leccion.definicionB, 
      imagen: leccion.imagenB 
    },
    { 
      key: 'C', 
      titulo: leccion.tituloC, 
      definicion: leccion.definicionC, 
      caso: leccion.casoPracticoC 
    },
    { 
      key: 'D', 
      titulo: leccion.tituloD, 
      definicion: leccion.definicionD, 
      caso: leccion.casoPracticoD 
    },
    { 
      key: 'E', 
      titulo: leccion.tituloE, 
      esVideo: true 
    },
  ];

  const seccion = secciones.find(s => s.key === seccionActiva);

  const getYouTubeId = (url) => {
    const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : '';
  };

  return (
    <div className="layout-lecciones">
      <nav className="nav-lecciones">
        <h3>{leccion.titulo}</h3>
        <ul>
          {secciones.map((s) => (
            <li key={s.key}>
              <button 
                onClick={() => setSeccionActiva(s.key)}
                className={seccionActiva === s.key ? 'activo' : ''}
              >
                {s.titulo}
              </button>
            </li>
          ))}

          <li>
            <Link to={`/examen/${leccionId}`} className="nav-enlace-examen">
              Examen
            </Link>
          </li>
        </ul>
      </nav>

      <main className="main-lecciones">
        {seccion?.esVideo ? (
          <>
            <h2>{leccion.tituloE}</h2>
            <div className="video-container">
              <iframe
                width="100%"
                height="400"
                src={`https://www.youtube.com/embed/${getYouTubeId(leccion.video)}`}
                title="Video explicativo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>Conclusiones:</h3>
            <ul>
              {leccion.conclusiones.map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </>
        ) : (
          <>
            <h2>{seccion?.titulo}</h2>
            <p>{seccion?.definicion}</p>

            {seccion?.imagen && (
              <img 
                src={seccion.imagen.trim()} 
                alt={`Ilustración ${seccion.key}`} 
                className="leccion-imagen"
              />
            )}

            {seccion?.caso && (
              <div className="caso-practico">
                <h4>Caso práctico:</h4>
                <p>{seccion.caso}</p>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};