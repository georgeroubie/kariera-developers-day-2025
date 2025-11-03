import { CopyIcon } from '../icons/copy-icon';
import { GearIcon } from '../icons/gear-icon';
import logo from './../assets/react.svg';

const links = [
  { name: 'GameNest', url: 'https://gamenest.gr' },
  { name: 'GitHub', url: 'https://github.com/georgeroubie' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/georgeroubie' },
];

export const FinalProject = () => {
  const handleOnClick = () => {
    alert('Primary button is clicked');
  };

  const copyToClipboard = (_ev: React.MouseEvent<HTMLElement, MouseEvent>, text: string) => {
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const onSettingsButtonClick = () => {
    alert('Settings button is clicked');
  };

  return (
    <main className="wrapper">
      <h1 className="title">Kariera Developers:Day 2025 - Workshop</h1>
      <h2 className="subtitle">Build for Everyone: EAA-Compliant Web Apps</h2>
      <div className="image-area">
        <div className="logo-wrapper">
          <img className="logo" src={logo} alt="" />
        </div>
        <p className="logo-description">
          Donec ultricies, urna et lacinia bibendum, ante tortor cursus tellus, ut bibendum urna urna ac neque. Mauris
          rhoncus, sapien id finibus accumsan, purus velit interdum nulla, iaculis lacinia velit lectus a turpis.
          Curabitur auctor porta enim eu dapibus. Curabitur commodo tellus metus, id dapibus turpis iaculis faucibus.
          Etiam eleifend purus quam, vitae feugiat lectus luctus ac. Ut nisi metus, congue in odio a, accumsan convallis
          quam.
        </p>
      </div>
      <button className="primary-button" onClick={handleOnClick}>
        Click me
      </button>
      <ul className="list">
        {links.map((link, index) => (
          <li className="list-item" key={index}>
            <a className="list-link" href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name}
            </a>

            <button
              className="list-action"
              onClick={(ev) => copyToClipboard(ev, link.url)}
              aria-label={`Copy ${link.name} link to clipboard`}
            >
              <CopyIcon width="1.25rem" height="1.25rem" />
            </button>
          </li>
        ))}
      </ul>
      <button className="settings-button" aria-label="Open settings" onClick={onSettingsButtonClick}>
        <GearIcon width="1.5rem" height="1.5rem" />
      </button>
    </main>
  );
};
