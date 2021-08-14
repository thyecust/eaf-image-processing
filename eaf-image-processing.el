;;; eaf-image-processing.el --- EAF Image Processing

;; Filename: eaf-image-processing.el
;; Description: EAF Image Processing
;; Author: thy <thy@mail.ecust.edu.cn>, 
;;           edited based on Andy Stewart <lazycat.manatee@gmail.com> 
;; Maintainer: thy <thy@mail.ecust.edu.cn>
;; Copyright (C) 2021, thy, all rights reserved.
;; Created: 2021-08-13 14:00
;; Version: 0.1
;; Last-Updated: 2021-08-13 14:00
;;           By: thy
;; Keywords: EAF
;; Compatibility: GNU Emacs 28.0.50

;;; This file is NOT part of GNU Emacs

;;; License
;;
;; This program is free software; you can redistribute it and/or modify
;; it under the terms of the GNU General Public License as published by
;; the Free Software Foundation; either version 3, or (at your option)
;; any later version.

;; This program is distributed in the hope that it will be useful,
;; but WITHOUT ANY WARRANTY; without even the implied warranty of
;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
;; GNU General Public License for more details.

;; You should have received a copy of the GNU General Public License
;; along with this program; see the file COPYING.  If not, write to
;; the Free Software Foundation, Inc., 51 Franklin Street, Fifth
;; Floor, Boston, MA 02110-1301, USA.

;;; Commentary:
;;
;; Vue demo
;;

;;; Installation:
;;
;; Put eaf-vue-demo.el to your load-path.
;; The load-path is usually ~/elisp/.
;; It's set in your ~/.emacs like this:
;; (add-to-list 'load-path (expand-file-name "~/elisp"))
;;
;; And the following to your ~/.emacs startup file.
;;
;; (require 'eaf-vue-demo)
;;
;; No need more.

;;; Customize:
;;
;;
;;
;; All of the above can customize by:
;;      M-x customize-group RET eaf-vue-demo RET
;;

;;; Change log:
;;
;; 2021/08/13
;;      * First released.
;;

;;; Acknowledgements:
;;
;;
;;

;;; TODO
;;
;;
;;

;;; Require


;;; Code:

;;;###autoload
(defun eaf-open-image-processing ()
  "Open EAF Image Processing"
  (interactive)
  (eaf-open "eaf-image-processing" "image-processing"))

(setq eaf-image-processing-module-path (concat (file-name-directory load-file-name) "buffer.py"))
(add-to-list 'eaf-app-module-path-alist '("image-processing" . eaf-image-processing-module-path))

(provide 'eaf-image-processing)

;;; eaf-image-processing.el ends here
