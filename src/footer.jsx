import React from 'react'
import './footer.css'
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

var dt = new Date();

export default function footer() {
	return (
		<div>
			<footer>
				<div className="container">
					<div className="social">
						<div className="soci"><FaGithub /></div>
						<div className="soci"><FaInstagram /></div>
						<div className="soci"><FaTwitter /></div>
					</div>
					<div className="copyright">
						Copyright &copy; {dt.getFullYear()}, Sebahattin KÜÇÜK
					</div>
				</div>
			</footer>
		</div>
	)
}
