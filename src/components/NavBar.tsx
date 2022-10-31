import { Breadcrumb, BreadcrumbItem, Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export const NavBar = () => {
  const router = useRouter();
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Box cursor="pointer" onClick={() => router.push('/')}>
          Home
        </Box>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box cursor="pointer" onClick={() => router.push('/autobatch')}>
          Auto-batch
        </Box>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box cursor="pointer" onClick={() => router.push('/suspense')}>
          Suspense
        </Box>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box cursor="pointer" onClick={() => router.push('/nested_suspense')}>
          Nested-Suspense
        </Box>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <Box cursor="pointer" onClick={() => router.push('/startTransition')}>
          startTransition
        </Box>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
