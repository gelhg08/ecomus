// app/components/Map.tsx
const Map = () => {
    return (
      // En tu archivo de estilos CSS o directamente en el JSX
<div className="flex justify-center items-center mt-16 mb-16">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.337858174151!2d-75.58618982404195!3d6.219100993768914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44293f0e114eef%3A0x99610cdd44c7c081!2sRiwi!5e0!3m2!1ses!2sco!4v1724876599171!5m2!1ses!2sco"
    width="600"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Maps"
  ></iframe>
</div>

    );
  };
  
  export default Map;
  