import { useTheme } from '@shared/hooks';
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'tj', name: 'Тоҷикӣ' },
  { code: 'ru', name: 'Русский' },
];

function App() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 text-center dark:bg-gray-900">
      <div className="mb-4 flex flex-row gap-4">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`m-2 rounded bg-blue-500 px-4 py-2 text-white ${i18n.language === lang.code ? 'bg-blue-700' : ''}`}
          >
            {lang.name}
          </button>
        ))}
      </div>

      <div>
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={`m-2 rounded bg-blue-500 px-4 py-2 text-white ${theme === 'dark' ? 'bg-blue-700' : ''}`}
        >
          {theme}
        </button>
      </div>

      <h1 className="text-3xl dark:text-white">{t('home.title')}</h1>
      <p className="dark:text-white">{t('home.description')}</p>
    </div>
  );
}

export default App;
