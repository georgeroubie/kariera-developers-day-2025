import logo from './../assets/react.svg';
import './starter-project.css';

export const StarterProject = () => {
  return (
    <div className="wrapper">
      <div className="title">Kariera Developers:Day 2025 - Workshop</div>
      <div className="subtitle">Build for Everyone: EAA-Compliant Web Apps</div>
      <div className="image-area">
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="image" />
        </div>
        <div className="logo-description">
          Donec ultricies, urna et lacinia bibendum, ante tortor cursus tellus, ut bibendum urna urna ac neque. Mauris
          rhoncus, sapien id finibus accumsan, purus velit interdum nulla, iaculis lacinia velit lectus a turpis.
          Curabitur auctor porta enim eu dapibus. Curabitur commodo tellus metus, id dapibus turpis iaculis faucibus.
          Etiam eleifend purus quam, vitae feugiat lectus luctus ac. Ut nisi metus, congue in odio a, accumsan convallis
          quam.
        </div>
      </div>
    </div>
  );
};
