import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Callback = () => {
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query && query.code) {
      // Presume que a autenticação está completa e redireciona para o CMS.
      // Aqui, você poderia também manipular tokens se necessário.
      router.replace('/admin');
    } else {
      // Se não houver código OAuth, redirecione para o login.
      router.replace('/admin');
    }
  }, [router]);

  return <p>Redirecionando...</p>;
};

export default Callback;
