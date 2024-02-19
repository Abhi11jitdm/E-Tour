//package com.etour.mail;
//
//import java.io.File;
//import java.util.Properties;
//
//import javax.activation.DataHandler;
//import javax.activation.DataSource;
//import javax.activation.FileDataSource;
//import javax.mail.BodyPart;
//import javax.mail.Message;
//import javax.mail.Multipart;
//import javax.mail.Session;
//import javax.mail.Transport;
//import javax.mail.internet.InternetAddress;
//import javax.mail.internet.MimeBodyPart;
//import javax.mail.internet.MimeMessage;
//import javax.mail.internet.MimeMultipart;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.stereotype.Component;
//import org.springframework.web.multipart.MultipartFile;
//
//@Component
//public class EmailSender {
//    
//    @Value("${spring.mail.username}")
//    private String username;
//    
//    @Value("${spring.mail.password}")
//    private String password;
//    
//    @Value("${spring.mail.host}")
//    private String host;
//    
//    @Value("${spring.mail.port}")
//    private int port;
//    
//    @Value("${file.path}")
//    private String path;
//    
//    public void send(String subject, MultipartFile filename, String message) {
//        Properties props = new Properties();
//        props.put("mail.smtp.auth", "true");
//        props.put("mail.smtp.starttls.enable", "true");
//        props.put("mail.smtp.host", host);
//        props.put("mail.smtp.port", port);
//        
//        Session session = Session.getInstance(props,
//                new javax.mail.Authenticator() {
//                    protected javax.mail.PasswordAuthentication getPasswordAuthentication() {
//                        return new javax.mail.PasswordAuthentication(username, password);
//                    }
//                });
//        
//        try {
//            MimeMessage mimeMessage = new MimeMessage(session);
//            mimeMessage.setFrom(new InternetAddress(username));
//            mimeMessage.addRecipient(Message.RecipientType.TO, new InternetAddress("nitin.javastudent@gmail.com"));
//            mimeMessage.setSubject(subject);
//            
//            MimeBodyPart part1 = new MimeBodyPart();
//            String name = filename.getOriginalFilename();
//            String filePath = path + File.separator + name;
//            DataSource source = new FileDataSource(filePath);
//            part1.setDataHandler(new DataHandler(source));
//            part1.setFileName(filePath);
//            
//            BodyPart part2 = new MimeBodyPart();
//            part2.setText(message);
//            
//            Multipart multipart = new MimeMultipart();
//            multipart.addBodyPart(part1);
//            multipart.addBodyPart(part2);
//            
//            mimeMessage.setContent(multipart);
//            
//            Transport.send(mimeMessage);
//            
//            System.out.println("Email sent successfully!");
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//}
