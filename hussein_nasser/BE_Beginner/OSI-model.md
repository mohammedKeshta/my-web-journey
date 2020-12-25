# OSI Model 

### Definition 
  - The OSI Model (Open Systems Interconnection Model) 
       - is a conceptual framework used to describe the functions of a networking system. 
       - The OSI model characterizes computing functions into a universal set of rules 
         and requirements in order to support interoperability 
         between different products and software.
  - Layers 
       - **Layer 7 / Application** 
            - Get 10.0.0.3:80, http headers cookies
            - Both the end user and the application layer interact directly with the software application.
            - The application layer identifies communication partners, resource availability, and synchronizes communication.
       - **Layer 6 / Presentation** 
            - Encrypt if necessary
            - formats or translates data for the application layer based on the syntax or semantics that the application accepts.
            - at times also called the syntax layer
       - **Layer 5 / Session** 
            - Establish session / tag it
            - controls the conversations between different computers.
            -  A session or connection between machines is set up, managed, and termined at layer 5. 
            - Session layer services also include authentication and reconnections.
       - **Layer 4 / transport** 
            - manages the delivery and error checking of data packets.
            - One of the most common examples of the transport layer is TCP or the Transmission Control Protocol.
       - **Layer 3 / Network** 
            - add the source/target ip
            - Responsible for receiving frames from the data link layer, and delivering them to their intended destinations among based on the addresses contained inside the frame.
            - The network layer finds the destination by using logical addresses, such as IP (internet protocol). 
       - **Layer 2 / Data Link** 
            - This layer is the protocol layer that transfers data between nodes on a network 
              segment across the physical layer.
            - connected nodes that have been used to perform node-to-node data transfer where data is packaged into frames. 
            - The data link layer also corrects errors that may have occurred at the physical layer
       - **Layer 1 / Physical** 
            - 10001100010001
            -  is concerned with electrically or optically transmitting raw unstructured data bits across the network from the physical layer of the sending device to the physical layer of the receiving device.
            - It can include specifications such as voltages, pin layout, cabling, and radio frequencies. 
            - At the physical layer, one might find “physical” resources such as network hubs, cabling, repeaters, network adapters or modems. 