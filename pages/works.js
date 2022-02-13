import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import mooi from '../public/images/works/mooi.png';
import commerce from '../public/images/works/commerce.png';
import intsika from '../public/images/works/intsika.png';
import greenoit from '../public/images/works/greenoit.png';
import servlink from '../public/images/works/servlink.png';

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="inkdrop" title="Mooi.Salons" thumbnail={mooi}>
            An application for clients to book appointments to any salon registered on the app in their city.
            The app also gives salon owners the platform to reach a bigger audience
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="walknote"
            title="Intsika.Edu.App"
            thumbnail={intsika}
          >
            An app that connects matriculants and also allow them to find tutors. Material to help learners study is also available
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="fourpainters"
            title="mooi.ecommerce"
            thumbnail={commerce}
          >
            An application for buying beauty products online.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Other Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={greenoit}
            title="Greenoit"
          >
            An application to request collection of recycled waste and make money from the recycled material
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={servlink} title="Servlink">
            A tool for request services from service providers.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
