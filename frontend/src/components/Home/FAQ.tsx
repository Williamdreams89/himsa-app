import { createStyles, Image, Accordion, Grid, Col, Container, Title } from '@mantine/core';
import { FrequentlyAskedQuestions } from '../../data/FAQs';

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: theme.spacing.md,
    paddingLeft: theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  item: {
    fontSize: theme.fontSizes.sm,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7],
  },
}));

const placeholder =
  'It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.';

const Faq=()=> {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container size="lg">
        <Grid id="faq-grid" gutter={50}>
          <Col span={12} md={6}>
            <Image src="/images/image.svg" alt="Frequently Asked Questions" />
          </Col>
          <Col span={12} md={6}>
            <Title order={2} ta="left" className={classes.title}>
              Frequently Asked Questions
            </Title>
            {FrequentlyAskedQuestions.map(item=><Accordion chevronPosition="right" variant="separated">
              <Accordion.Item className={classes.item} value="reset-password">
                <Accordion.Control>{item.question}</Accordion.Control>
                <Accordion.Panel>{item.answer}</Accordion.Panel>
              </Accordion.Item>
            </Accordion>)}
          </Col>
        </Grid>
      </Container>
    </div>
  );
}

export default Faq