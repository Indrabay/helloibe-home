import { Box, Center, Container, Flex, Heading, Mark, Stack, Text, VStack, Timeline } from '@chakra-ui/react'

import { SiRubyonrails, SiMysql, SiReact, SiDatadog, SiApachekafka } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGolang } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { FaMapPin } from "react-icons/fa6";
import React from 'react'

const About = () => {
  return (
    <Box maxW={'container.md'} pb={'100px'} color={'white'}>
      <Stack>
        <Container
          display='flex'
          direction={'column'}

          hideBelow={'md'}

          bgColor={'var(--color-primary-background)'}
        >
          <Heading
            as={'h2'}
            fontFamily={'"Fira Code", monospace !important'}
            fontWeight={'medium'}
            w={'50%'}
            textTransform={'uppercase'}
          ><Mark color={'var(--color-primary)'}>{'>'}</Mark> here is little things about me</Heading>
          <Stack w={'50%'}>
            <Flex dir='column' gap={'10px'}>
              <Mark color={'var(--color-primary)'}>{'>'}</Mark>
              <Text>Ibe is a backend engineer most of the time with over 8 years of experiences building scalable and modular endpoint</Text>
            </Flex>
            <Flex dir='column' gap={'10px'}>
              <Mark color={'var(--color-primary)'}>{'>'}</Mark>
              <Text>He specialize in clean architecture with maintainable testable code</Text>
            </Flex>
            <Flex dir='column' gap={'10px'}>
              <Mark color={'var(--color-primary)'}>{'>'}</Mark>
              <Text>Currently exploring new ideas and building cool stuff at helloibe.com</Text>
            </Flex>
          </Stack>
        </Container>
        <Container hideFrom={'md'}>
          <VStack>
            <Heading
              as={'h2'}
              fontFamily={'"Fira Code", monospace !important'}
              fontWeight={'medium'}
              textTransform={'uppercase'}
              textDecor={'underline var(--color-primary)'}
            ><Mark color={'var(--color-primary)'}>{'>'}</Mark> here is little things about me</Heading>
                <Text>Ibe is a backend engineer most of the time with over 8 years of experiences building scalable and modular endpoint. He specialize in clean architecture with maintainable testable code. Currently exploring new ideas and building cool stuff at helloibe.com</Text>
          </VStack>
        </Container>
        <Container w={'100%'} mt={'30px'} paddingTop={'10px'} paddingBottom={'10px'} borderTop={'solid white'} borderBottom={'solid white'} marginBottom={'20px'}>
          <Center hideBelow={'md'}>
            <Flex gap={'15px'}>
              <SiRubyonrails size={'50px'} />
              <IoLogoJavascript size={'50px'} />
              <FaGolang size={'50px'} />
              <SiMysql size={'50px'} />
              <SiReact size={'50px'} />
              <SiDatadog size={'50px'}/>
              <SiApachekafka size={'50px'} />
              <RiNextjsFill size={'50px'} />
            </Flex>
          </Center>
          <Center hideFrom={'md'}>
            <Flex gap={'15px'}>
              <SiRubyonrails size={'50px'} />
              <IoLogoJavascript size={'50px'} />
              <FaGolang size={'50px'} />
              <SiMysql size={'50px'} />
              <SiReact size={'50px'} />
              <RiNextjsFill size={'50px'} />
            </Flex>
          </Center>
        </Container>
        <Container>
          <Center>
          <Timeline.Root maxW={'400px'}>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator borderColor={'var(--color-primary)'}/>
                <Timeline.Indicator bgColor={'var(--color-primary)'}>
                  <FaMapPin />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  PT. Skyshi Digital Indonesia
                </Timeline.Title>
                <Timeline.Description>
                  2017 - 2019
                </Timeline.Description>
                <Text>Working with a team to build application for many clients, handle a few redux technologies and mostly doing backend stuff REST Api stuff</Text>
                <Text color={'var(--color-primary)'}>Nodejs, Reactjs, Mysql</Text>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator borderColor={'var(--color-primary)'}/>
                <Timeline.Indicator bgColor={'var(--color-primary)'}>
                  <FaMapPin />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  PT. Bukalapak
                </Timeline.Title>
                <Timeline.Description>
                  2019 - 2023
                </Timeline.Description>
                <Text>Handle supply chain of warehouse of online-to-offline goods, make sure all the stock in warehouse is in place. Create monitor and alerting to early detect some defect data or flow in stock</Text>
                <Text color={'var(--color-primary)'}>Reactjs, Mysql, Ruby on rails, Golang, GCP</Text>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator borderColor={'var(--color-primary)'}/>
                <Timeline.Indicator bgColor={'var(--color-primary)'}>
                  <FaMapPin />
                </Timeline.Indicator>
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>
                  PT. Allofresh
                </Timeline.Title>
                <Timeline.Description>
                  2023 - current
                </Timeline.Description>
                <Text>Make sure stock, price and promo reliability by sync between two organizations, also doing integration with a lot of vendor to handle warehouse management and ERP</Text>
                <Text color={'var(--color-primary)'}>Reactjs, Mysql, Postgre, Golang, GCP, Kafka, Datadog</Text>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Connector>
                <Timeline.Separator borderColor={'var(--color-primary)'}/>
              </Timeline.Connector>
              <Timeline.Content>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline.Root>
          </Center>
        </Container>
      </Stack>
    </Box>
  )
}

export default About