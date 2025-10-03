import { Modal, ScrollArea, Tooltip } from "@mantine/core";
import { Document, Page } from 'react-pdf'
import { ActionIcon } from '@mantine/core';
import { IconDownload } from '@tabler/icons-react';
import { Info } from '../helpers/User';

const ViewResume = (props) => {
  return (
    <Modal.Root scrollAreaComponent={ScrollArea.Autosize} size="auto" centered className="font-mono" opened={props.opened} onClose={props.close}>
      <Modal.Overlay className="!backdrop-opacity-85 blur-sm" />
      <Modal.Content className="!rounded-3xl">
        <Modal.Header className="!bg-bgColor xs-mx:!p-2  !border-primaryColor  !border-2 !border-b-0 !rounded-tl-3xl !rounded-tr-3xl">
          <Modal.Title data-autofocus className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl text-white flex gap-3 xs-mx:gap-1 items-center !font-bold">
            Resume
            <Tooltip label='Download' className='!text-bgColor' color='#8cf8f8' position='right' offset={5}>
              <ActionIcon className='!text-primaryColor' component='a' href='my_resume.pdf' download={Info.name} variant="outline" color='#8cf8f8'>
                <IconDownload />
              </ActionIcon>
            </Tooltip>
          </Modal.Title>
          <Modal.CloseButton size="md" iconSize="30px" className="!bg-bgColor !text-textColor" />
        </Modal.Header>
        <Modal.Body className="!bg-bgColor xs-mx:!p-2 !border-primaryColor  !border-2 !border-t-0 !rounded-bl-3xl !rounded-br-3xl">
          <Document file='my_resume.pdf'>
            <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
          </Document>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default ViewResume