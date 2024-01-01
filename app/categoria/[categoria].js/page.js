import { useRouter } from 'next/router';
import DynamicTitle from '../../components/DynamicTitle/DynamicTitle';
// otros imports...

const CategoriaPage = () => {
  const router = useRouter();
  const { categoria } = router.query; // Obtiene el parámetro de la ruta

  return (
    <div>
      {/* otros componentes */}
      <DynamicTitle currentPath={categoria} />
      {/* más componentes */}
    </div>
  );
};

export default CategoriaPage;
