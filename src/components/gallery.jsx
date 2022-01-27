import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import styles from "./gallery.module.scss"

export default function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className={styles.gallery}>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>
  );
}

const photos = [
    {
      src: "https://i.ibb.co/LxNZCqC/hotel-mainumby-2.png",
      width: 4,
      height: 3
    },
    {
      src: "https://i.ibb.co/KwwCF7T/hotel-mainumby.jpg",
      width: 1,
      height: 1
    },
    {
      src: "https://i.ibb.co/YdFvfSV/Escaleras-Hotel-Mainumby.jpg",
      width: 3,
      height: 4
    },
    {
      src: "https://i.ibb.co/z4d8NTL/Escaleras-primer-piso-2.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/JBj2q8z/Desayunador.jpg",
      width: 4,
      height: 4
    },
    {
        src: "https://i.ibb.co/mcZgYVr/Escaleras.jpg",
        width: 4,
        height: 4
      },
    {
      src: "https://i.ibb.co/hFp4qzn/Habitacion-premium-4.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/WPWQSCD/Habitacion-premium-5.jpg",
      width: 4,
      height: 4
    },
    {
        src: "https://i.ibb.co/890gzMD/Habitacion-premium-1.png",
        width: 4,
        height: 3
      },
      {
        src: "https://i.ibb.co/n8R6sL1/Habitacion-premium-2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/n8R6sL1/Habitacion-premium-2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/VYZtw50/Habitacion-secundaria-premium.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/ZSqLYHx/Habitacion-premium-3.jpg",
        width: 4,
        height: 4
      },
    {
      src: "https://i.ibb.co/gV5cfRz/Ban-o-premium-1.jpg",
      width: 4,
      height: 4
    },
    {
      src: "https://i.ibb.co/KsGgFcw/Ban-o-premium-4.png",
      width: 4,
      height: 4
    }, 
      {
        src: "https://i.ibb.co/x29HYY7/Ban-o-premium-3.jpg",
        width: 1,
        height: 1
      },
      {
        src: "https://i.ibb.co/JBKDhL4/Ban-o-premium-2.jpg",
        width: 3,
        height: 4
      },
      {
        src: "https://i.ibb.co/VLgkBy5/Ban-o-premium-4.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/D1h6TvD/Habitacion-superior-6.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/Bg0tS58/Habitacion-superior-7.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/4f977pr/Habitacion-superior-9.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/TM25dHS/Habitacion-superior-1.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/C8RcSH3/Habitacion-superior-2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/tcVGmr9/Habitacion-superior-3.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/C884tGm/Habitacion-superior-4.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/VW0CGcZ/Habitacion-superior-5.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/vmmZPZL/Ban-o-superior-1.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/c858h8J/Ban-o-superior-2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/tZxcScS/Ban-o-superior-3.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/dKpKxQR/Habitacion-estandar-1.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/qRQx7R3/Habitacion-estandar-2.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/FH5QCBG/Habitacion-estandar-3.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/z83Nppf/Habitacion-estandar-4.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/D4nTz7f/Habitacion-estandar-5.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/DCb1Sn0/Habitacion-estandar-6.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/Yh3gkC2/Ban-o-estandar-1.jpg",
        width: 4,
        height: 4
      },
      {
        src: "https://i.ibb.co/Zdh0Y43/Ban-o-estandar-2.jpg",
        width: 4,
        height: 4
      }
  ];