import { Badge, Button, Group, Image, Indicator, Modal, ScrollArea, Text, useMatches } from "@mantine/core";

const FullProjectModal = (props) => {
  const download = useMatches({ xs: "xs", md: "sm", lg: "md", bs: "lg" });
  const techno = useMatches({ xs: "md", sm: "md", md: "lg", bs: "xl" });
  const btn = useMatches({ xs: "xs", sm: "sm", md: "md", lg: "lg" });

  // Xác định có cả FE và BE không
  const hasBothRepos = props.feCode && props.beCode;

  return (
    <Modal.Root
      scrollAreaComponent={ScrollArea.Autosize}
      size="auto"
      centered
      className=" font-mono"
      opened={props.opened}
      onClose={props.close}
    >
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2  !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title
            data-autofocus
            className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl text-white flex gap-3 xs-mx:gap-1 items-center !font-bold"
          >
            {props.title}
            {props.live === true && (
              <Badge
                className="flex items-center gap-1"
                size={download}
                variant="outline"
                color="red"
                rightSection={
                  <Indicator
                    color="red"
                    position="middle-end"
                    size={10}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </Modal.Title>
          <Modal.CloseButton
            size="md"
            iconSize="30px"
            className="!bg-bgColor !text-red-500"
          />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2 !pt-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <div className="aspect-video w-full overflow-hidden rounded-xl shadow-[0_0_5px_0_#8cf8f8]">
            <Image
              className="!rounded-xl h-full w-full"
              src={props.image}
              alt={props.image}
              fit="cover"
            />
          </div>
          <div className="flex flex-wrap gap-3 xs-mx:gap-2 my-3">
            {props.technologies.map((tech, index) => (
              <Badge
                key={index}
                size={techno}
                variant="light"
                color="#8cf8f8"
              >
                {tech}
              </Badge>
            ))}
          </div>
          <Text
            className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-xs"
            c="dimmed"
          >
            {props.desc}
          </Text>

          <Group justify={hasBothRepos || props.live ? "space-between" : "center"} mt="md" mb={3} className="flex-wrap">
            {props.feCode && (
              <a
                href={props.feCode}
                target="_blank"
                rel="noreferrer"
                className={hasBothRepos || props.live ? "!w-[48%] sm-mx:!w-[46%]" : "!w-full sm-mx:!w-[80%]"}
              >
                <Button
                  variant="outline"
                  size={btn}
                  color="#8cf8f8"
                  fullWidth
                  radius="md"
                >
                  View Code Frontend
                </Button>
              </a>
            )}

            {props.beCode && (
              <a
                href={props.beCode}
                target="_blank"
                rel="noreferrer"
                className={hasBothRepos || props.live ? "!w-[48%] sm-mx:!w-[46%]" : "!w-full sm-mx:!w-[80%]"}
              >
                <Button
                  className="!text-bgColor"
                  size={btn}
                  color="#8cf8f8"
                  fullWidth
                  radius="md"
                >
                  View Code Backend
                </Button>
              </a>
            )}

            {!props.feCode && !props.beCode && (
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                className={props.live ? "!w-[48%] sm-mx:!w-[46%]" : "!w-full sm-mx:!w-[80%]"}
              >
                <Button
                  className="!text-bgColor"
                  size={btn}
                  color="#8cf8f8"
                  fullWidth
                  radius="md"
                >
                  View Code
                </Button>
              </a>
            )}

            {props.live && (
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className={hasBothRepos ? "!w-full mt-3" : "!w-[48%]"}
              >
                <Button
                  size={btn}
                  color="#8cf8f8"
                  className="!text-bgColor"
                  fullWidth
                  radius="md"
                >
                  View Live App
                </Button>
              </a>
            )}
          </Group>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  );
};

export default FullProjectModal;