import { Component, OnInit } from '@angular/core';
import { NodeService } from '../../node.service';
import { MenuItem, Message, TreeNode } from 'primeng/primeng';

@Component({
  selector: 'primeng-material-tree-context-menu',
  templateUrl: './tree-context-menu.component.html',
  styleUrls: ['./tree-context-menu.component.scss']
})
export class TreeContextMenuComponent implements OnInit {
  msgs: Message[];
  items: MenuItem[];
  filesTree: TreeNode[];
  selectedFile: TreeNode;

  constructor(private nodeService: NodeService) {}

  ngOnInit() {
    this.nodeService.getFiles().then(files => (this.filesTree = files));
    this.items = [
      {
        label: 'View',
        icon: 'fa-search',
        command: event => this.viewFile(this.selectedFile)
      },
      {
        label: 'Unselect',
        icon: 'fa-close',
        command: event => this.unselectFile()
      }
    ];
  }

  viewFile(file: TreeNode) {
    this.msgs = [];
    this.msgs.push({
      severity: 'info',
      summary: 'Node Selected with Right Click',
      detail: file.label
    });
  }

  unselectFile() {
    this.selectedFile = null;
  }
}
