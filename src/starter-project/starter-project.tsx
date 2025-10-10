import { CopyIcon } from '../icons/copy-icon';
import { GearIcon } from '../icons/gear-icon';
import logo from './../assets/react.svg';

const links = [
  { name: 'GameNest', url: 'https://gamenest.gr' },
  { name: 'GitHub', url: 'https://github.com/georgeroubie' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/georgeroubie' },
];

export const StarterProject = () => {
  const handleOnClick = () => {
    alert('Primary button is clicked');
  };

  const openNewPage = (url: string) => {
    window.open(url, '_blank');
  };

  const copyToClipboard = (ev: React.MouseEvent<HTMLElement, MouseEvent>, text: string) => {
    ev.stopPropagation();
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const onSettingsButtonClick = () => {
    alert('Settings button is clicked');
  };

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
      <div className="primary-button" onClick={handleOnClick}>
        Click me
      </div>
      <div className="list">
        {links.map((link, index) => (
          <div className="list-item" key={index} onClick={() => openNewPage(link.url)}>
            {link.name}

            <div className="list-action" onClick={(ev) => copyToClipboard(ev, link.url)}>
              <CopyIcon width="20px" height="20px" />
            </div>
          </div>
        ))}
      </div>
      <div className="settings-button" onClick={onSettingsButtonClick}>
        <GearIcon width="24px" height="24px" />
      </div>
    </div>
  );
};
