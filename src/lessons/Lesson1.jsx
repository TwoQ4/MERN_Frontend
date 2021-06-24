import React from 'react';
import { NavLink } from 'react-router-dom';

import './Lesson.scss'

const Lesson1 = () => {
    return (
        <div className="lesson">
            <h3>1. Введение в базы данных. Основные понятия и определения</h3>
            <hr />
            <p>&nbsp;</p>
            <p>В настоящее время успешное функционирование различных фирм, организаций и предприятий просто не возможно без развитой информационной системы, которая позволяет автоматизировать сбор и обработку данных. Обычно для хранения и доступа к данным, содержащим сведения о некоторой предметной области, создается база данных.</p>
            <p>&nbsp;</p>
            <p><strong><em>База данвных (БД)</em></strong> — именованная совокупность данных, отражающая состояние объектов и их отношений в рассматриваемой предметной области.</p>
            <p>&nbsp;</p>
            <p>Под предметной областью принято понимать некоторую область человеческой деятельности или область реального мира, подлежащих изучению для организации управления и автоматизации, например, предприятие, вуз и.т.д.</p>
            <p>&nbsp;</p>
            <p><strong><em>Система управления базами данных (СУБД)</em></strong> — совокупность языковых и программных средств, предназначенных для создания, наполнения, обновления и удаления баз данных.</p>
            <p>Основополагающими понятиями в концепции баз данных являются обобщенные категории «данные» и «модель данных».</p>
            <p>Понятие «данные» в концепции баз данных — это набор конкретных значений, параметров, характеризующих объект, условие, ситуацию или любые другие факторы, Примеры данных: Петров Николай Степанович, $30 и т. д. Данные не обладают определенной структурой, данные становятся информацией тогда, когда пользователь задает им определенную структуру, то есть осознает их смысловое содержание. Поэтому центральным понятием в области баз данных является понятие модели. Не существует однозначного определения этого термина, у разных авторов эта абстракция определяется с некоторыми различиями но, тем не менее, можно выделить нечто общее в этих определениях.</p>
            <p>&nbsp;</p>
            <p><strong><em>Модель данных </em></strong><em>—</em> это некоторая абстракция, которая, будучи приложима к конкретным данным, позволяет пользователям и разработчикам трактовать их уже как информацию, то есть сведения, содержащие не только данные, но и взаимосвязь между ними.</p>
            <p>С помощью модели данных могут быть представлены объекты предметной области и взаимосвязи между ними. В зависимости от вида организации данных различают следующие важнейшие модели БД:</p>
            <ul>
                <li>• иерархическую</li>
                <li>• сетевую</li>
                <li>• реляционную</li>
                <li>• объектно-ориентированную</li>
            </ul>
            <p>&nbsp;</p>
            <p>В <strong><em>иерархической</em></strong> БД данные представляются в виде древовидной структуры. Подобная структура БД удобна для работы с данными, упорядоченными иерархически. При оперировании данными со сложными логическими связями иерархическая модель оказывается слишком громоздкой.</p>
            <p>&nbsp;</p>
            <p>В <strong><em>сетевой</em></strong> БД данные организуются в виде графа. Недостатком сетевой структуры является жесткость структуры и сложность ее организации.</p>
            <p>&nbsp;</p>
            <p><strong><em>Реляционная</em> </strong>БД получила свое название от английского термина relation (отношение). Была предложена в 70-м году сотрудником фирмы IBM Эдгаром Коддом. Реляционная БД представляет собой совокупность таблиц, связанных отношениями. Достоинствами реляционной модели данных являются простота, гибкость структуры. Кроме того ее удобно реализовывать на компьютере. Большинство современных БД для персональных компьютеров являются реляционными.</p>
            <p>&nbsp;</p>
            <p><strong><em>Объектно-ориентированные</em></strong> БД объединяют сетевую и реляционную модели и используются для создания крупных БД с данными сложной структуры.</p>
            <p>&nbsp;</p>
            <p>Базы данных можно разделить на базы данных <em>первого поколения</em>: иерархические, сетевые; <em>второго поколения</em>: реляционные; <em>третьего поколения</em>: объектно-ориентированные, обектно-реляционные.</p>
            <p>Программы, с помощью которых пользователи работают с базой данных, называются <em>приложениями.</em> В общем случае с одной базой данных могут работать множество различных приложений. Например, если база данных моделирует некоторое предприятие, то для работы с ней может быть создано приложение, которое обслуживает подсистему учета кадров, другое приложение может быть посвящено работе подсистемы расчета заработной платы сотрудников, третье приложение работает как подсистемы складского учета, четвертое приложение посвящено планированию производственного процесса. При рассмотрении приложений, работающих с одной базой данных, предполагается, что они могут работать параллельно и независимо друг от друга, и именно СУБД призвана обеспечить работу множества приложений с единой базой данных таким образом, чтобы каждое из них выполнялось корректно, то учитывало все изменения в базе данных, вносимые другими приложениями.</p>
            <p>&nbsp;</p>
            <p>Для поиска информации в базах данных используется информационно-поисковая система. Информационно-поисковая система опирается на базу данных, в которой осуществляется поиск нужных документов по заявкам пользователей.</p>
            <p>&nbsp;</p>
            <p>Различают <strong><em>фактографические</em></strong> автоматизированные информационные системы (АИС), у которых базы данных составляются из форматированных (формализованных) записей, и <strong><em>документальные</em></strong> АИС, записями которых могут служить различные неформализованные документы (статьи, письма и т.п.). <p>&nbsp;</p> В <b>фактографических АИС</b> примером форматированных записей могут служить, скажем, записи об операциях по приему и выдаче денег в сберкассе; запись имеет четыре основных атрибута: дата, характер операции (принято, выдано), сумма, остаток вклада.</p>
            <p>&nbsp;</p>
            <p>В качестве форматированной записи может рассматриваться кадровая анкета (личный листок по учету кадров). Правда, такие ее разделы, как «прежняя работа», «поездки за границу» и др. в обычной анкете не до конца формализованы и имеют переменную длину, поэтому при автоматизации этой задачи необходимы некоторые поправки. Обычно бывает целесообразно фиксировать максимальное количество позиций в каждом разделе и тем самым выравнивать длину записей (у многих записей при этом могут возникать позиции с пустым заполнением).</p>
            <p>&nbsp;</p>
            <p>Основной задачей, решаемой в <b>документальных АИС</b>, является поиск документов по их содержанию. Документальная система по заданию пользователя выдает необходимые ему документы (книги, статьи, законы, патенты, отчеты и т.д.). В задании могут указываться сведения об искомых документах: автор, наименование, время издания, издательство и т.д.</p>
            <p>&nbsp;</p>
            <hr />
            <div className="lesson-nav">

                <NavLink to="/lesson2">
                    <a href="/lesson2" className="waves-effect waves-light btn-large nav-bottom"> Следующий урок &rarr; </a>
                </NavLink>
            </div>
            
            
        </div>
        
    );
}

export default Lesson1;
