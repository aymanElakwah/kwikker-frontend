import { Component, OnInit } from '@angular/core';
import { LyTheme2, ThemeVariables } from '@alyle/ui';
import { NotificationsServiceService } from './notifications-service.service';
import { AlertComponentComponent } from '../app/alert-component/alert-component.component';
import { MatDialog, MatDialogConfig } from '@angular/material';


const STYLES = (theme: ThemeVariables) => ({
  '@global': {
    body: {
      backgroundColor: theme.background.default,
      color: theme.text.default,
      fontFamily: theme.typography.fontFamily,
      margin: 0,
      direction: theme.direction
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  readonly classes = this.theme.addStyleSheet(STYLES);

  title = 'kwikker';
  /**
   * empty constructor 
   * @param theme 
   * @param socket for notifications service
   * @param dialog for alert componenet
   */
  constructor(private theme: LyTheme2,private socket:NotificationsServiceService,private dialog: MatDialog) { }
  /**
   * listen on the soket for new notifications and give alert about them
   */
  ngOnInit(){
    
    this.socket.ReciveNotifications(localStorage.getItem("username")).subscribe(res=>{
      console.log(res);
      this.giveAlert(res);

    })
  }
  /**
   * alert using dialog
   * @param message the shwon message in alert
   */
  giveAlert(message:string){
    const dialogConfig = new MatDialogConfig();
     dialogConfig.position = {
       left:'0px',
       bottom:'10px'
     }
    dialogConfig.height = '150px';
    dialogConfig.width = '350px';
    dialogConfig.hasBackdrop = false;
    dialogConfig.disableClose = true;
    const dialogRef = this.dialog.open(AlertComponentComponent, dialogConfig);
    dialogRef.componentInstance.meesage = message;
    this.playAudio();
    setTimeout(()=>{
      dialogRef.close()
    },5000)
  }
  /**
   * to paly an audio
   */
  playAudio(){
    let audio = new Audio();
    audio.src = "../../assets/sounds/beeb.mp3";
    audio.load();
    audio.play();
  }

}
